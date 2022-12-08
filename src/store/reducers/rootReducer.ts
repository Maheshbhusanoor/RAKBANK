import {Reducer} from 'react';
import {asyncReducers} from 'react-redux-help-kit';
import {combineReducers} from 'redux';
import {loginData} from './loginData';
import {userConfigData} from './locationData';

const rootReducer: Reducer<any, any> = combineReducers({
  ...asyncReducers,
  loginData,
  userConfigData,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
