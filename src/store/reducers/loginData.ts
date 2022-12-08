import {createReducer} from '@reduxjs/toolkit';
import {LoginUserDataModel} from '../../types';
import {fetchLoginDataFailure, fetchLoginDataSuccess} from '../actions';

const initialState: LoginUserDataModel = {
  loginData: {
    loggedInTimeStamp: '',
    email: '',
    telephone: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
  },
};

export const loginData = createReducer(initialState, builder => {
  builder.addCase(fetchLoginDataSuccess, (state, {payload}) => ({
    ...state,
    ...payload,
  }));
  builder.addCase(fetchLoginDataFailure, () => {
    return {
      ...initialState,
    };
  });

  //   builder.addCase(fetchLoginDataFailure, state => ({
  //     ...state,
  //     loginData: null,
  //   }));
});
