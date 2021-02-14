import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Player = styled(ReactPlayer)``;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ vKey }) => (
  <Player
    url={`https://www.youtube.com/watch?v=${vKey}`}
    width="360px"
    height="202px"
  />
);
