/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';

import * as CategoryActions from '../../store/modules/category/actions';

class Category extends Component {
  state = {
    category: '',
  };

  componentDidMount() {
    const { category } = this.props.category;
    const { history } = this.props;

    if (category) {
      this.setState({ category });
    } else {
      history.goBack();
    }
  }

  render() {
    return (
      <Container>
        <footer>
          <button type="button">Carregar outra</button>
        </footer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoryActions, dispatch);

const mapStateToProps = state => ({
  category: state.category,
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
