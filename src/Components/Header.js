import React from 'react';
// a태그 대신 Link 사용시 해당 페이지가 내 어플리케이션에 있으면
// 브라우져한 방식으로 가지않고 JS의 방식으로 이동하게 함
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//* 첫자는 대문자로 시작해야함 (모든 React Component 동일)

const Header = styled.header``;

// css 스타일이 적용된 ul을 생성하여 List에 넣고 JSX에서 List를 Tag로 사용
const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
