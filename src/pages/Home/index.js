import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import * as CategoryActions from '../../store/modules/category/actions';

import { CategoryList, CategoryItem } from './styles';

class Home extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const response = await api.get('/categories');

    this.setState({ categories: response.data });
  }

  render() {
    const { categories } = this.state;

    return (
      <CategoryList>
        {categories.map(category => (
          <li key={category}>
            <CategoryItem to="category">
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
}

const mapStateToProps = state => ({
  amount: state.category.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
