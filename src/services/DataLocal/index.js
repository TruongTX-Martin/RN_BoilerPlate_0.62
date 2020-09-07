import { AsyncStorage } from 'react-native';
import Constants from '../../config/Constant';

const setAccessToken = (accessToken) => {
  try {
    AsyncStorage.setItem(Constants.ACCESS_TOKEN, accessToken);
  } catch (error) { }
};
const getAccessToken = async () => {
  const accessToken = await AsyncStorage.getItem(Constants.ACCESS_TOKEN);
  return accessToken;
};

export default {
  setAccessToken,
  getAccessToken,
};
