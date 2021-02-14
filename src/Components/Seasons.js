import React from 'react';
import styled from 'styled-components';
import Season from './Season';

const Grid = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Seasons = ({ seasons }) => {
  console.log(seasons);

  return (
    <Grid>
      {seasons &&
        seasons.map((v) => (
          <Season
            key={v.id}
            id={v.id}
            imageUrl={v.poster_path}
            title={v.name}
            year={v.air_date ? v.air_date.substring(0, 4) : ''}
          />
        ))}
    </Grid>
  );
};

export default Seasons;
