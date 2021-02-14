import React, { useState } from 'react';
import styled from 'styled-components';
import Productions from './Productions';
import Videos from './Videos';
import Seasons from './Seasons';

const Container = styled.div`
  width: 100%;
  background-color: rgba(20, 20, 20, 1);
`;

const TabContainer = styled.ul`
  display: flex;
`;

const Tab = styled.li`
  display: block;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 5px solid
    ${(props) => (props.selected ? '#3498db' : 'transparent')};
  transition: border-bottom 0.3s ease-in-out;
`;

const DetailTab = ({ result }) => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(result);
  return (
    <Container>
      <TabContainer>
        <Tab onClick={() => setTabIndex(0)} selected={tabIndex === 0}>
          Videos
        </Tab>
        <Tab onClick={() => setTabIndex(1)} selected={tabIndex === 1}>
          Productions
        </Tab>
        {result.seasons && (
          <Tab onClick={() => setTabIndex(2)} selected={tabIndex === 2}>
            Seasons
          </Tab>
        )}
      </TabContainer>
      {tabIndex === 0 && <Videos videos={result.videos.results} />}
      {tabIndex === 1 && (
        <Productions
          pcomp={result.production_companies}
          pcoun={result.production_countries}
        />
      )}
      {tabIndex === 2 && <Seasons seasons={result.seasons} />}
    </Container>
  );
};

export default DetailTab;
