import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {createLogger} from 'redux-logger';

let sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['userConfigData'],
  stateReconciler: autoMergeLevel2,
};
let middlewares = applyMiddleware(sagaMiddleware);

// if (__DEV__) {
//   const {logger} = require('redux-logger');
//   // const createDebugger = require('redux-flipper').default;
//   middlewares = applyMiddleware(sagaMiddleware, logger());
// }

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Middleware: Redux Persist Persister

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware, createLogger()),
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
};

export default configureStore;
