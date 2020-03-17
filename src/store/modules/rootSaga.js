import { all } from 'redux-saga/effects';

import category from './category/sagas';

export default function* rootSaga() {
  return yield all([category]);
}
