import React from 'react';
//BrowserRouter를 쓰면 Url에 #이 표시되지 않는다.
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import TV from 'Routes/TV';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
//exact : Route시 경로가 겹치지 않게오직 이 경로만 사용하도록 설정
// ex /tv, /tv/popular 가 있을 경으 exact를 쓰지 않으면 2개 모두 보여진다.
// 즉 루트 경로에 exact 선언하지 않으면 tv에서 root와 tv 2개가 보여짐

//<Redirect from="*" to="/" /> -> Route 검색하다가 일치하는 Route가 없으면 /으로 리다이렉트 시킨다.
//Switch를 넣지않으면 순서대로 내려오므로 결국에는 모든 페이지에서 리다이렉트가 일어난다.
