export function listCategoryRequest() {
  return { type: '@category/LIST_REQUEST' };
}

export function listCategorySuccess(category) {
  return { type: '@category/LIST_SUCCESS', category };
}
