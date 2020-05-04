import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CategoryList, CategoryItem } from './styles';

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
        categories.map(category => (
          <li key={category}>
            <CategoryItem to={`/${category}`}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/${category}.png`}
                alt={category}
              />
              <strong>{category}</strong>
            </CategoryItem>
          </li>
        ))}
    </CategoryList>
  );
}
