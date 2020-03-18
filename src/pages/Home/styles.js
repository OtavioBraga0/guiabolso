import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { devices } from '../../styles/devices';

export const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: ${devices.mobileL}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${devices.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
  }
`;

export const CategoryItem = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 20px;

  img {
    align-self: center;
    max-width: 150px;
  }

  > strong {
    font-size: 24px;
    line-height: 20px;
    color: #333;
    margin-top: 15px;
    text-align: center;
    text-transform: uppercase;
  }
`;
