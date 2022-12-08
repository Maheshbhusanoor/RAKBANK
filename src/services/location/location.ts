import {Alert} from 'react-native';
import {
  PERMISSIONS,
  request,
  requestMultiple,
  check,
  RESULTS,
  openSettings,
  PermissionStatus,
  checkMultiple,
} from 'react-native-permissions';
import {isIOS} from '../constants';
import i18n from 'i18next';
import Geolocation from 'react-native-geolocation-service';
import {MapLocation} from 'src/types';

class LocationService {
  async getLocationPermissionStatus() {
    let status: PermissionStatus;

    if (isIOS) {
      status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      const {
        'android.permission.ACCESS_COARSE_LOCATION': coarseStatus,
        'android.permission.ACCESS_FINE_LOCATION': fineStatus,
      } = await checkMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ]);

      if (fineStatus === 'granted' || coarseStatus === 'granted') {
        status = 'granted';
      } else if (coarseStatus === 'blocked' && fineStatus === 'blocked') {
        status = 'blocked';
      } else if (
        // If coarse is denied and fine is blocked the modal asking for coarse is opened
        coarseStatus === 'denied' &&
        (fineStatus === 'denied' || fineStatus === 'blocked')
      ) {
        status = 'denied';
      } else {
        status = 'unavailable';
      }
    }

    return status;
  }

  private showPermissionSettingsAlert() {
    Alert.alert(
      'Please go to Settings and enable location services for App',
      'Please, enable location service in your system settings',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Go to settings',
          onPress: () => {
            openSettings();
          },
        },
      ],
    );
  }

  async checkLocationPermissionIOS() {
    let status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

    if (status === RESULTS.BLOCKED || status === RESULTS.UNAVAILABLE) {
      if (status === RESULTS.BLOCKED) {
        this.showPermissionSettingsAlert();
      }

      if (status === RESULTS.UNAVAILABLE) {
        Alert.alert(
          'Enable Location Services',
          'Please, enable location service in your system settings',
        );
      }

      return false;
    } else {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      return status === RESULTS.GRANTED;
    }
  }

  async checkLocationPermissionAndroid() {
    const {
      'android.permission.ACCESS_COARSE_LOCATION': coarseStatus,
      'android.permission.ACCESS_FINE_LOCATION': fineStatus,
    } = await requestMultiple([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    ]);

    const isGranted = fineStatus === 'granted' || coarseStatus === 'granted';
    const isBlocked = coarseStatus === 'blocked' && fineStatus === 'blocked';

    if (isBlocked) {
      this.showPermissionSettingsAlert();

      return false;
    }

    return isGranted;
  }

  async checkLocationPermission() {
    let result: boolean = false;
    if (isIOS) {
      result = await this.checkLocationPermissionIOS();
    } else {
      result = await this.checkLocationPermissionAndroid();
    }

    if (!result) {
      Alert.alert(
        'Please go to Settings and enable location services for App',
        'Location permission denied',
      );
    }

    return result;
  }

  getCurrentLocation(): Promise<MapLocation> {
    return new Promise((res, rej) => {
      Geolocation.getCurrentPosition(
        position => {
          res({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          rej(error);
        },
        {enableHighAccuracy: true, timeout: 2000, maximumAge: 10000},
      );
    });
  }
}

export const locationService = new LocationService();
