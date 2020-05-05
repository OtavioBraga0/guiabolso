import React from 'react';

import PropTypes from 'prop-types';
import { CategoryItem } from './styles';

export default function Category({ category }) {
  return (
    <li key={category}>
      <CategoryItem to={`/${category}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/${category}.png`}
          alt={category}
        />
        <strong>{category}</strong>
      </CategoryItem>
    </li>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
};
