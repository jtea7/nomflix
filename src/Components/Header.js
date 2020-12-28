import React from 'react';
// Link : a태그 대신 Link 사용시 해당 페이지가 내 어플리케이션에 있으면 브라우져한 방식으로 가지않고 JS의 방식으로 이동하게 함
// withRouter : 다른 컴포넌트를 감싸는 컴포넌트 (Router에 대한 정보를 준다.)
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

//* 첫자는 대문자로 시작해야함 (모든 React Component 동일)

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

// css 스타일이 적용된 ul을 생성하여 List에 넣고 JSX에서 List를 Tag로 사용
const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  border-bottom: 5px solid
    ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Route에 정의된 컴포넌트는 props에서 Loaction 정보를 자동으로 받아온다.
//Header의 경우 Router에 정의되지 않았기 withRouter를 함께 사용해야한다.
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default withRouter(({ location: { pathname } }) => (
  <Header>
    {/* {console.log(props)} */}
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
