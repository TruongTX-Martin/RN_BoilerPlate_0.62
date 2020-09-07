import Config from 'react-native-config';
import { Platform } from 'react-native';

const constant = {
  DETAIL: 'Detail',

  EVENT_GOTO_SIGNIN: 'EVENT_GOTO_SIGNIN',
  EVENT_GOTO_STORE: 'EVENT_GOTO_STORE',
  EVENT_SIGNIN_SUCCESS: 'EVENT_SIGNIN_SUCCESS',
  EVENT_SIGN_OUT: 'EVENT_SIGN_OUT',
  EVENT_SNS_SIGNIN_AGAIN: 'EVENT_SNS_SIGNIN_AGAIN',
  EVENT_RECALL_API: 'EVENT_RECALL_API_ACCESSTOKEN',

  VERSION_APP: '1.2.0',
  KEY_ACCESS_ID: 'MzNhc3NlY2VLZXkzMTU4NjU4NzI4MDg4NDgz',
  KEY_SECRET: 'MzRzY3JldEtleTMxNTg2NTg3MzQ2MjM2NTkie',
  //asynstorage
  SHOW_INTRO: 'SHOW_INTRO',
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  USER_TOKEN: 'USER_TOKEN',
  TOKEN_FIREBASE: '@TokenFireBase',

  // BASE_URL: 'https://api.kiwetv.com/v1',
  // BASE_URL: 'https://dev-api.kiwetv.com/v1',
  BASE_URL: Config.BASE_URL,

  //fonts
  FONT_NANUMSQUARE_ROUND:
    Platform.OS == 'ios' ? 'NanumSquareRoundEB' : 'Mono-ExtraBold',
  FONT_MONO_REGULAR: Platform.OS == 'ios' ? 'NanumSquareRound' : 'Mono-Regular',
  FONT_MONO_BLOD: Platform.OS == 'ios' ? 'NanumSquareRoundB' : 'Mono-Blod',
};
export default constant;
