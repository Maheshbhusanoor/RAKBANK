import {call, delay, put} from 'redux-saga/effects';
import {NetworkService} from '../../../services/network';
import {LoginUserDataModel} from '../../../types';
import {loginApiPayloadModel} from '../../../types/loginApiPayloadModel';
import {fetchLoginDataSuccess, fetchLoginDataFailure} from '../../actions';

export function* fetchLoginSaga(payload: loginApiPayloadModel) {
  try {
    const mocked_data: LoginUserDataModel = yield call(() =>
      NetworkService(payload),
    );
    yield delay(4000); // TO BE REMOVED : Intentional Delay to showcase the loading on button
    yield put(fetchLoginDataSuccess(mocked_data));
  } catch (e) {
    yield put(fetchLoginDataFailure());
  }
}
