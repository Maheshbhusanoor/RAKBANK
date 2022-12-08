import {apiEndpoints, baseURL} from './constants';

import axios from 'axios';
import {loginApiPayloadModel} from '../types';

export const NetworkService = (payload: loginApiPayloadModel) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.post(
        `${baseURL.URL}/${apiEndpoints.login}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
