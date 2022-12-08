// import {takeLatest, fork} from 'redux-saga/effects';
// import {StoreSagas} from '../types';
import {
  fetchLoginDataRequest,
  fetchUserCurrentLocationRequest,
} from '../actions';

import {all, fork, takeLatest} from 'redux-saga/effects';
import {fetchLoginSaga} from './login';
import {fetchUserCurrentLocationSaga} from './getUserCurrentLocation';
// export function createRootSaga(sagas: StoreSagas, extaRootSaga?: () => any) {
//   const {fetchLoginSaga} = sagas;

//   return function* rootSaga() {
//     yield takeLatest(fetchLoginDataRequest.type, fetchLoginSaga);

//     if (extaRootSaga) {
//       yield fork(extaRootSaga);
//     }
//   };
// }

export default function* rootSaga() {
  // yield all([fork(fetchLoginSaga)]);
  yield takeLatest(fetchLoginDataRequest.type, fetchLoginSaga);
  yield takeLatest(
    fetchUserCurrentLocationRequest.type,
    fetchUserCurrentLocationSaga,
  );
}
