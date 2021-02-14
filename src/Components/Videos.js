import React from 'react';
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';

const Grid = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  grid-gap: 25px;
`;

const Videos = ({ videos }) => {
  console.log(videos);

  return (
    <Grid>
      {videos && videos.map((v) => <VideoPlayer key={v.id} vKey={v.key} />)}
    </Grid>
  );
};

export default Videos;
