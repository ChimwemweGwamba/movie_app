import React from "react";
import styled from "styled-components";
import Movie from "./movie";
import { device } from "../devices/devices";
import { useMovieList } from "../context/movieContext";

function Movies(props) {
  const {
    state: { movieList },
  } = useMovieList();

  return (
    <Container>
      <SubHeading>{props.subHeading}</SubHeading>
      <Heading>{props.heading}</Heading>

      <MovieContainer>
        {props.page === "home"
          ? movieList.map((movie, index) => (
              <Movie movie={movie} key={movie.id}></Movie>
            ))
          : movieList.map((movie, index) => {
              if (movie.favMovie === true) {
                return <Movie movie={movie} key={movie.id}></Movie>;
              }
            })}
      </MovieContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 50px auto;

  @media ${device.desktop} {
    width: 100%;
    margin: 100px auto;
  }
`;

const SubHeading = styled.p`
  color: red;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: white;
  text-align: center;
`;

const MovieContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.desktop} {
    padding: 50px 0;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
`;

export default Movies;
