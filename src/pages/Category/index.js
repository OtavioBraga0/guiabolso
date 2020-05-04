import React, { useState, useEffect } from 'react';

import { MdCached } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import {
  Container,
  JokeDesc,
  JokeHeader,
  JokeBody,
  Categories,
  CategoryItem,
} from './styles';

import * as CategoryActions from '../../store/modules/category/actions';
import * as JokeActions from '../../store/modules/joke/actions';

export default function Category({ match }) {
  const categories = useSelector(state => state.category.data);
  const joke = useSelector(state => state.joke.data);
  const dispatch = useDispatch();

  const getCategory = match.params.category;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(JokeActions.getJokeRequest(getCategory));
    dispatch(CategoryActions.listCategoryRequest());
    setLoading(false);
  }, [dispatch, getCategory]);

  function handleLoad() {
    setLoading(true);
    dispatch(JokeActions.getJokeRequest(getCategory));
    setLoading(false);
  }

  return (
    <>
      <Container>
        <JokeDesc>
          <JokeHeader>
            <strong>{getCategory}</strong>
            <img
              src={`${process.env.PUBLIC_URL}/assets/${getCategory}.png`}
              alt={getCategory}
            />
          </JokeHeader>
          <JokeBody>{joke ? <span>{joke.value}</span> : null}</JokeBody>
        </JokeDesc>
        <footer>
          <button type="button" onClick={handleLoad} disabled={loading}>
            {!loading ? (
              'Loading Another'
            ) : (
              <MdCached size={40} color="white" />
            )}
          </button>
        </footer>
      </Container>
      <Categories>
        {categories &&
          categories.map(category =>
            getCategory !== category ? (
              <li key={category}>
                <CategoryItem to={`/category/${category}`}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/${category}.png`}
                    alt={category}
                  />
                  <strong>{category}</strong>
                </CategoryItem>
              </li>
            ) : null
          )}
      </Categories>
    </>
  );
}

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
    }),
  }).isRequired,
};
