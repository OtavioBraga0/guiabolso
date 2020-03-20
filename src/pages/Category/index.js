/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MdCached } from 'react-icons/md';
import api from '../../services/api';

import {
  Container,
  JokeDesc,
  JokeHeader,
  JokeBody,
  Categories,
  CategoryItem,
} from './styles';

import * as CategoryActions from '../../store/modules/category/actions';

class Category extends Component {
  state = {
    cat: '',
    description: '',
    loading: true,
    categories: [],
  };

  async componentDidMount() {
    this.loadJoke();
    const response = await api.get('/categories');

    this.setState({ categories: response.data });
  }

  handleLoad = () => {
    this.setState({ loading: true });
    this.loadJoke();
  };

  loadJoke = async () => {
    const { category } = this.props.category;
    let cat = '';

    if (!category) {
      cat = localStorage.getItem('category');
    } else {
      cat = category;
    }

    const response = await api.get(`/random?category=${cat}`);

    this.setState({
      cat,
      description: response.data.value,
      loading: false,
    });
  };

  handleClick(category) {
    const { getCategory } = this.props;

    getCategory(category);
  }

  render() {
    const { cat, description, loading, categories } = this.state;
    return (
      <>
        <Container>
          <JokeDesc>
            <JokeHeader>
              <strong>{cat}</strong>
              <img
                src={`${process.env.PUBLIC_URL}/assets/${cat}.png`}
                alt={cat}
              />
            </JokeHeader>
            <JokeBody>
              <span>{description}</span>
            </JokeBody>
          </JokeDesc>
          <footer>
            <button type="button" onClick={this.handleLoad} disabled={loading}>
              {!loading ? (
                'Loading Another'
              ) : (
                <MdCached size={40} color="white" />
              )}
            </button>
          </footer>
        </Container>
        <Categories>
          {categories.map(category =>
            cat !== category ? (
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
            ) : null
          )}
        </Categories>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoryActions, dispatch);

const mapStateToProps = state => ({
  category: state.category,
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
