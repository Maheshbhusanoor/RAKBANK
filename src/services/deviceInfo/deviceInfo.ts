import DeviceInfo from 'react-native-device-info';
import {isIOS} from '../constants';
import {Platform} from 'react-native';

import {NetworkInfo} from 'react-native-network-info';

class DeviceInfoService {
  async getDeviceInfo() {
    const IMEI = require('react-native-imei');

    const deviceInfo = {
      os: Platform.OS || '',
      deviceName: (await DeviceInfo.getDeviceName()) || '',
      deviceMacAddress: await DeviceInfo.getMacAddress(),
      IMEI: !isIOS
        ? (await IMEI.getImei()) || ''
        : (await DeviceInfo.getUniqueId()) || '',
      publicIP: (await NetworkInfo.getIPAddress()) || '',
    };

    return deviceInfo;
  }
}

export const deviceInfoService = new DeviceInfoService();
