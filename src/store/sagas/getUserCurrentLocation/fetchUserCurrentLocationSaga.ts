import {
  fetchUserCurrentLocationFailure,
  fetchUserCurrentLocationSuccess,
} from '../../actions';
import {locationService} from '../../../services/location';
import {deviceInfoService} from '../../../services/deviceInfo';

import {call, put} from 'redux-saga/effects';
import {PermissionStatus} from 'react-native-permissions';
import {MapLocation} from 'src/types';

export function* fetchUserCurrentLocationSaga(): any {
  let isPermissionRequestRequired: boolean = false;
  let getDeviceInfo: any = {};
  let cordinates: MapLocation;

  try {
    const locationPermissionStatus: PermissionStatus = yield call([
      locationService,
      locationService.getLocationPermissionStatus,
    ]);
    getDeviceInfo = yield call([
      deviceInfoService,
      deviceInfoService.getDeviceInfo,
    ]);
    isPermissionRequestRequired = locationPermissionStatus === 'denied';
    if (isPermissionRequestRequired) {
      yield call([locationService, locationService.checkLocationPermission]);
    }
    cordinates = yield call([
      locationService,
      locationService.getCurrentLocation,
    ]);
    const finalPayload = {
      userConfigData: {
        ...getDeviceInfo,
        location: cordinates,
      },
    };

    yield put(fetchUserCurrentLocationSuccess(finalPayload));
  } catch (e) {
    cordinates = {
      latitude: '',
      longitude: '',
    };
    const finalPayload = {
      userConfigData: {
        ...getDeviceInfo,
        location: cordinates,
      },
    };

    yield put(fetchUserCurrentLocationSuccess(finalPayload));

    // yield put(fetchUserCurrentLocationFailure()); // TO CLEAR REDUCER
  }
}
