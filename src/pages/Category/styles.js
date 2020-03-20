import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    button {
      border-radius: 4px;
      border: none;
      height: 80px;
      width: 250px;

      font-size: 24px;
      font-weight: bold;
      color: white;

      background: #29aae1;

      &:disabled {
        cursor: not-allowed;
        background: ${lighten(0.3, '#29aae1')};
        svg {
          animation: ${rotate} 2s linear infinite;
        }
      }
    }
  }
`;

export const JokeDesc = styled.div`
  flex: 1;
  padding: 20px;
`;

export const JokeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > strong {
    font-size: 26px;
    text-transform: uppercase;
  }

  img {
    width: 80px;
  }
`;

export const JokeBody = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  jusitfy-content: center;
  > span {
    margin: 0 auto;
    font-size: 22px;
    width: 100%;
    text-align: center;

    font-weight: bold;
  }
`;

export const Categories = styled.ul`
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-top: 20px;
  padding-bottom: 20px;

  list-style: none;

  overflow: auto;

  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${lighten(0.2, '#191920')};
  }
`;

export const CategoryItem = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 20px;
  background: #fff;
  border-radius: 8px;

  margin: 0 10px;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:bth-last-child() {
    margin-right: 0;
  }

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
