import { all, takeLatest } from 'redux-saga/effects';
import { signUp } from './authSaga';
import * as Types from '../actions/types';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([takeLatest(Types.SIGN_UP, signUp)]);
}
