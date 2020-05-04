import { all } from 'redux-saga/effects';

import joke from './joke/sagas';
import category from './category/sagas';

export default function* rootSaga() {
  return yield all([joke, category]);
}
