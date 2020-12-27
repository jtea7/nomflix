import React from 'react';
import './Header.css';

// CSS는 전역적으로 생성되기 때문에 모든 Component에서 className이
// 중복되지 않도록 해야하는 문제점이 있다.

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <header>
    <ul className="nav">
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);
