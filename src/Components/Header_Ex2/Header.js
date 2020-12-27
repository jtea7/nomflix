import React from 'react';
import styles from './Header.module.css';

// css를 JS처럼 Import하고 className을 넣어주면
// 자동으로 className 뒤에 랜덤문자를 넣어줘서
// className 겹치지 않도록 자동으로 처리해준다.

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <header>
    <ul className={styles.navList}>
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
