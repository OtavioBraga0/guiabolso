import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CategoryList } from './styles';

import Category from '../../components/Category';

import * as CategoryActions from '../../store/modules/category/actions';

export default function Home() {
  const categories = useSelector(state => state.category.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoryActions.listCategoryRequest());
  }, [dispatch]);

  return (
    <CategoryList>
      {categories &&
        categories.map(category => <Category category={category} />)}
    </CategoryList>
  );
}
