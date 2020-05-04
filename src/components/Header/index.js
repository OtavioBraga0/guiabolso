import React from 'react';

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

export default Header;
