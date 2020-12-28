import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

//role과 aria-label : 시작장애인을 위해 표시
const Loader = () => (
  <Container>
    <span role="img" aria-label="Loading">
      🥰
    </span>
  </Container>
);

export default Loader;
