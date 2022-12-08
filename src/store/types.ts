import {reducers} from './reducers';
import {sagas} from './sagas';
import {middlewares} from './middlewares';

export type StoreSagas = typeof sagas;
export type StoreReducers = typeof reducers;
export type StoreMiddlewares = typeof middlewares;
export interface IReduxStoreProvider {
  getSagas(): StoreSagas;
  getReducers(): StoreReducers;
  getMiddlewares(): StoreMiddlewares;
}
