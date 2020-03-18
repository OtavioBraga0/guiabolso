import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { devices } from '../../styles/devices';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 200px;
    width: auto;
  }

  @media (max-width: ${devices.tablet}) {
    img {
      width: 80%;
      height: auto;
    }
  }
`;
