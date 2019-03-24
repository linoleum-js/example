import { call, put, takeLatest } from 'redux-saga/effects';

import { AUTHORIZE, FAIL, SUCCESS } from '../constants/constants';
import { authorize } from '../services/api';

function* authorizeUser (action) {
  console.log('credensials', action.payload);

  const data = yield call(authorize, action.payload);
  console.log('data from server', data);
  yield put({ type: AUTHORIZE + SUCCESS })
}

function* userSaga () {
  yield takeLatest(AUTHORIZE, authorizeUser);
}

export default userSaga;