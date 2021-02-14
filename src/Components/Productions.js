import React from 'react';
import styled from 'styled-components';

const CompContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px 0px 0px;
`;

const CompLogo = styled.img`
  background-color: white;
  height: 30px;
  margin-right: 10px;
  padding: 2px;
`;

const CompName = styled.span`
  font-size: 14px;
`;

const CounName = styled.span`
  font-size: 14px;
  margin-right: 20px;
`;

const Title = styled.span`
  font-size: 16px;
  display: inline-block;
  margin: 10px 5px;
`;

const Comps = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const Company = ({ logo, name }) => (
  <CompContainer>
    {logo && (
      <CompLogo
        alt=""
        src={
          logo
            ? `https://image.tmdb.org/t/p/w300${logo}`
            : '../assets/noPosterSmall.png'
        }
      />
    )}
    <CompName>{name}</CompName>
  </CompContainer>
);

const Container = styled.div`
  margin-left: 20px;
`;

const Productions = ({ pcomp, pcoun }) => (
  <Container>
    <Title>Production Companies</Title>
    <Comps>
      {pcomp.map((c) => (
        <Company name={c.name} logo={c.logo_path} />
      ))}
    </Comps>
    <Title>Production Countries</Title>
    <Comps>
      {pcoun.map((c) => (
        <CounName>{c.name}</CounName>
      ))}
    </Comps>
  </Container>
);

export default Productions;
