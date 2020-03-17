export function addToCategoryRequest(id) {
  return { type: '@category/ADD_REQUEST', id };
}

export function addToCategorySuccess(product) {
  return { type: '@category/ADD_SUCCESS', product };
}

export function removeFromCategory(id) {
  return { type: '@category/REMOVE', id };
}

export function updateAmount(id, amount) {
  return {
    type: '@category/UPDATE_AMOUNT',
    id,
    amount,
  };
}
