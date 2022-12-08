export enum storageKeys {
  translations = 'translations',
  locale = 'locale',
}

export declare class IStorageService {
  public setItem: (
    key: storageKeys,
    value: string | boolean | number | object,
  ) => Promise<boolean>;
  public getItem: (key: storageKeys) => Promise<string | undefined>;
  public removeItem: (key: storageKeys) => Promise<void>;
  public getObject: <T>(key: storageKeys) => Promise<T | undefined>;
  public getBoolean: (key: storageKeys) => Promise<boolean | undefined>;
}
