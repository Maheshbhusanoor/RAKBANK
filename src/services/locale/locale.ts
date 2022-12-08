import {initReactI18next} from 'react-i18next';
import i18next, {Resource, TFunction} from 'i18next';
import {NativeModules, Platform} from 'react-native';
import {DEFAULT_LOCALE} from '../constants';
import {merge} from 'lodash';
import {IStorageService, storageKeys} from '../../types/storage';
import {LocaleServiceResources} from '../../types/locale';

// todo: move LocaleService to provider

const loadIntl = () => {
  // https://github.com/facebook/react-native/issues/19410
  // https://github.com/facebook/hermes/issues/23
  const intl = require('intl');
  require('intl/locale-data/jsonp/en');
  require('intl/locale-data/jsonp/ar');
  if (intl.__disableRegExpRestore) {
    intl.__disableRegExpRestore();
  }
};

export class LocaleService {
  private _t: any;
  private _locale: string = DEFAULT_LOCALE;
  private readonly _translations: Resource;

  constructor(
    {translations, locale = undefined}: LocaleServiceResources,
    private storageService: IStorageService,
  ) {
    this._translations = translations;
    this._locale = locale ? locale : this.getDeviceLocale();
    this._t = () => {};
    // const {t}: {t: any} = useTranslation();

    this.init();
  }

  get t() {
    return this._t;
  }

  get locale() {
    return this._locale;
  }

  isTranslationProvided = (locale: string): boolean =>
    Object.keys(this._translations).includes(locale);

  setLocale = async (locale: string, cb: () => void): Promise<void> => {
    await i18next.changeLanguage(locale);

    this._locale = locale;
    await this.storageService.setItem(storageKeys.locale, locale);
    typeof cb === 'function' && cb();
  };

  getDeviceLocale = (): string => {
    const locale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    const localeSubstring = locale.substring(0, 2);

    return localeSubstring && this.isTranslationProvided(localeSubstring)
      ? localeSubstring
      : DEFAULT_LOCALE;
  };

  async initLng(
    resources: Resource,
    shouldMergeWithBase?: boolean,
  ): Promise<TFunction> {
    const resource: Resource = shouldMergeWithBase
      ? merge(this._translations, resources)
      : resources;

    this._t = await i18next.use(initReactI18next).init({
      compatibilityJSON: 'v3',
      resources: resource,
      lng: this._locale,
      fallbackLng: DEFAULT_LOCALE,
      interpolation: {
        escapeValue: false,
      },
    });

    return this._t;
  }

  async init(): Promise<void> {
    try {
      loadIntl();

      const storageLocale =
        (await this.storageService.getItem(storageKeys.locale)) ||
        DEFAULT_LOCALE;

      this._locale = storageLocale;
      this.initLng(this._translations);
    } catch (e) {
      console.error('Locale service init error', e);
    }
  }
}
