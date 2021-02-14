import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgImg});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Season = ({ imageUrl, title, year }) => (
  <Container>
    <ImageContainer>
      <Image
        bgImg={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
            : '../assets/noPosterSmall.png'
        }
      />
    </ImageContainer>
    <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
    <Year>{year}</Year>
  </Container>
);

export default Season;
