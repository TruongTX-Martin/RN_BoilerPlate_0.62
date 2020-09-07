import axios from 'axios';
import { Platform } from 'react-native';
import Constants from '../../config/Constant';
import DataLocal from '../DataLocal';
import { EventRegister } from 'react-native-event-listeners';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

let tokenFirebase = '';

axios.interceptors.response.use(
  (response) => {
    checkResponse();
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      // EventRegister.emit(Constants.EVENT_SIGN_OUT);
    }
    console.log('Interceptors error:', error);
    console.log('Interceptors error code:', error.response.status);
    console.log(JSON.stringify(error));
  },
);

const checkResponse = () => {
  // EventRegister.emitEvent('TokenExpired');
};

const get = async (path, params) => {
  const data = await axios.get(path, params, axiosConfig);
  return data;
};


export default {
};
