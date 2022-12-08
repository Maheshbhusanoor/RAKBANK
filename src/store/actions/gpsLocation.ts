import {createAction} from '@reduxjs/toolkit';
import {loginApiPayloadModel} from '../../types';

export const fetchUserCurrentLocationRequest = createAction(
  'FETCH_USER_CURRENT_LOCATION_REQUEST',
);

export const fetchUserCurrentLocationSuccess =
  createAction<loginApiPayloadModel>('FETCH_USER_CURRENT_LOCATION_SUCCESS');
export const fetchUserCurrentLocationFailure = createAction(
  'FETCH_USER_CURRENT_LOCATION_FAILURE',
);
