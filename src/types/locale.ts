import {Resource} from 'i18next';

export type LocaleServiceResources = {
  translations: Resource;
  RTLLocales?: string[];
  locale?: string;
};
