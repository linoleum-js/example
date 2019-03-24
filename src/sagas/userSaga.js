import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  AUTHORIZE,
  RESTORE_PASSWORD,
  FAIL,
  SUCCESS
} from '../constants/constants';
import { authorize, restore } from '../services/api';

function* authorizeUser (action) {
  const data = yield call(authorize, action.payload);
  if (data.error) {
    yield put({ type: AUTHORIZE + FAIL });
  } else {
    yield put({ type: AUTHORIZE + SUCCESS, payload: data });
  }
}

function* restorePassword (action) {
  const data = yield call(restore, action.payload);
  if (data.error) {
    yield put({ type: RESTORE_PASSWORD + FAIL });
  } else {
    yield put({ type: RESTORE_PASSWORD + SUCCESS, payload: data });
  }
}

function* watchAuthorizeUser () {
  yield takeLatest(AUTHORIZE, authorizeUser);
}

function* watchRestorePassword () {
  yield takeLatest(RESTORE_PASSWORD, restorePassword);
}

function* userSaga () {
  yield all([
    watchAuthorizeUser(),
    watchRestorePassword()
  ]);
}

export default userSaga;