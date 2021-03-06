import produce from 'immer';

export default function category(state = {}, action) {
  switch (action.type) {
    case '@category/LIST_SUCCESS':
      return produce(state, draft => {
        draft.data = action.category;
      });
    default:
      return state;
  }
}
