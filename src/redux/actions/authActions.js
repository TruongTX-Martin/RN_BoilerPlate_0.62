import * as Types from './types';

//sign up
export function signUp(params) {
  return {
    type: Types.SIGN_UP,
    params,
  };
}

export function signUpStart() {
  return {
    type: Types.SIGN_UP_START,
  };
}

export function signUpSuccess() {
  return {
    type: Types.SIGN_UP_SUCCESS,
  };
}

export function signUpFailed(reason) {
  return {
    type: Types.SIGN_UP_FAILED,
    reason,
  };
}

export function signUpClearData() {
  return {
    type: Types.SIGN_UP_CLEAR,
  };
}
