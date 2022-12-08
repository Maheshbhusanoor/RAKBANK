import {createReducer} from '@reduxjs/toolkit';
import {loginApiPayloadModel, MapLocation} from '../../types';
import {
  fetchUserCurrentLocationFailure,
  fetchUserCurrentLocationSuccess,
} from '../actions';

const gpsCordinates: MapLocation = {
  latitude: '',
  longitude: '',
};
const initialState: loginApiPayloadModel = {
  userConfigData: {
    userId: '',
    password: '',
    os: '',
    deviceName: '',
    deviceMacAddress: '',
    IMEI: '',
    location: gpsCordinates,
    publicIP: '',
  },
};

export const userConfigData = createReducer(initialState, builder => {
  builder.addCase(fetchUserCurrentLocationSuccess, (state, {payload}) => ({
    ...state,
    ...payload,
  }));

  builder.addCase(fetchUserCurrentLocationFailure, () => {
    return {
      ...initialState,
    };
  });
});
