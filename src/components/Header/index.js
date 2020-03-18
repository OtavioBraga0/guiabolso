import React from 'react';
import { connect } from 'react-redux';

import { Container, HomeLink } from './styles';

import logo from '../../assets/logo.png';

function Header() {
  return (
    <Container>
      <HomeLink to="/">
        <img src={logo} alt="ChuckNorrisIO" />
      </HomeLink>
    </Container>
  );
}

export default connect(state => ({
  categorySize: state.category.length,
}))(Header);
