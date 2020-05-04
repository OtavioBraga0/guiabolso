import { combineReducers } from 'redux';

import joke from './joke/reducer';
import category from './category/reducer';

export default combineReducers({
  joke,
  category,
});
