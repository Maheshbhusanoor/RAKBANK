import {MapLocation} from './mapLocationModel';

export interface loginApiPayloadModel {
  userConfigData: {
    userId: string;
    password: string;
    os: string;
    deviceName: string;
    deviceMacAddress: string;
    IMEI: string;
    location: MapLocation;
    publicIP: string;
  };
}
