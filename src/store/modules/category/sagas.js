import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { listCategorySuccess } from './actions';

function* listCategory() {
  const response = yield call(api.get, '/categories');

  yield put(listCategorySuccess(response.data));
}

export default all([takeLatest('@category/LIST_REQUEST', listCategory)]);
