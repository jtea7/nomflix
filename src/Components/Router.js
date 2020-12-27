import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';

//exact : Route시 경로가 겹치지 않게오직 이 경로만 사용하도록 설정
export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" exact component={Search} />
  </Router>
);
