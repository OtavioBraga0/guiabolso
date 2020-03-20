import produce from 'immer';

export default function category(state = {}, action) {
  switch (action.type) {
    case '@category/GET_REQUEST':
      return produce(state, draft => {
        localStorage.setItem('category', action.category);
        draft.category = action.category;
      });
    default:
      return state;
  }
}
