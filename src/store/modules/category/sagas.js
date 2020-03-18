import { put, all, takeLatest } from 'redux-saga/effects';

function* getCategory({ category }) {
  yield put(category);
}

export default all([takeLatest('@category/GET_RIQUEST', getCategory)]);
