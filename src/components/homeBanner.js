import React from "react";
import styled, { css } from "styled-components";
import { device } from "../data/devices";

function HomeBanner(props) {
  return (
    <Container
      backgroundImg={{
        url: "https://image.tmdb.org/t/p/original" + props.movie.backdrop_path,
      }}
    >
      <TextContainer>
        <MovieDesc primary>Today's Top Pick</MovieDesc>
        <MovieTitle>{props.movie.title}</MovieTitle>
        <MovieDesc>{props.movie.overview}</MovieDesc>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 95vh;
  width: 100%;

  display: flex;
  align-items: center;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8496586134453782) 20%,
      rgba(255, 255, 255, 0) 80%
    ),
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6496586134453782) 5%,
      rgba(255, 255, 255, 0) 91%
    ),
    url("${(props) => props.backgroundImg.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media ${device.desktop} {
    height: 95vh;
  }
`;

const TextContainer = styled.div`
  width: 80%;
  margin: 0 10%;

  @media ${device.desktop} {
    width: 40%;
    margin: 0 5%;
  }
`;

const MovieTitle = styled.h1`
  font-size: 35px;
  font-weight: 900;
  text-align: center;
  color: white;

  @media ${device.desktop} {
    text-align: left;
    font-size: 50px;
  }
`;

const MovieDesc = styled.p`
  text-align: center;
  color: white;
  font-size: 15px;
  line-height: 25px;

  @media ${device.desktop} {
    text-align: left;
  }

  ${(props) =>
    props.primary &&
    css`
      color: red;
      font-weight: bold;
    `}
`;

const WatchButton = styled.button`
  background-color: red;
  font-weight: bold;
  color: white;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 0.2rem;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ae0000;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  &:active {
    position: relative;
    top: 1px;
    right: 1px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export default HomeBanner;
