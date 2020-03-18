import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  handleClick(category) {
    const { getCategory } = this.props;

    getCategory(category);
  }

  render() {
    const { categories } = this.state;

    return (
      <CategoryList>
        {categories.map(category => (
          <li key={category}>
            <CategoryItem
              to={`category/${category}`}
              onClick={() => this.handleClick(category)}
            >
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoryActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
