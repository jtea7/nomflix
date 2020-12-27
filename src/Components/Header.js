import React from 'react';
import styled from 'styled-components';

//* 첫자는 대문자로 시작해야함 (모든 React Component 동일)
// css 스타일이 적용된 ul을 생성하여 List에 넣고 JSX에서 List를 Tag로 사용
const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <header>
    <List>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </List>
  </header>
);
