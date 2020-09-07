import * as authActions from '../actions/authActions';
import { put } from 'redux-saga/effects';
import DataRemote from '../../services/DataRemote';

export function* signUp(action) {
  try {
    yield put(authActions.signUpStart());
    const signUpResult = yield DataRemote.signUp(action.params);
    if (signUpResult.status == 200) {
      yield put(authActions.signUpSuccess());
    } else {
      yield put(authActions.signUpFailed());
    }
  } catch (error) {
    yield put(authActions.signUpFailed());
  }
}
