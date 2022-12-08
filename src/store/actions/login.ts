import {createAction} from '@reduxjs/toolkit';
import {loginApiPayloadModel, LoginUserDataModel} from '../../types';

export const fetchLoginDataRequest = createAction<loginApiPayloadModel>(
  'FETCH_LOGIN_DATA_REQUEST',
);
export const fetchLoginDataSuccess = createAction<LoginUserDataModel>(
  'FETCH_LOGIN_DATA_SUCCESS',
);
export const fetchLoginDataFailure = createAction('FETCH_LOGIN_DATA_FAILURE');
