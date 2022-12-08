import {loginApiPayloadModel} from '../../types';

export const locationDataSelector = (state: loginApiPayloadModel) =>
  state.userConfigData;
