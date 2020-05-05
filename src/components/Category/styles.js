import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
