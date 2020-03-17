import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCategorySuccess } from './actions';

function* addToCategory({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCategorySuccess(response.data));
}

export default all([takeLatest('@category/ADD_REQUEST', addToCategory)]);
