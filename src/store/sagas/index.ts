import * as loginSagas from './login';
import * as fetchUserCurrentLocationSaga from './getUserCurrentLocation';

export const sagas = {
  ...loginSagas,
  fetchUserCurrentLocationSaga,
};
