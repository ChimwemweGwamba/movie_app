import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieBanner from "../components/movieBanner";
import { useMovieList } from "../context/movieContext";

function ViewMovie() {
  const {
    dispatch,
    state: { selectedMovieID, selectedMovie },
  } = useMovieList();

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${selectedMovieID}?api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      dispatch({
        type: "SET_SELECTED_MOVIE",
        payload: responseJson,
      });

      window.scrollTo(0, 0);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Container
      backgroundImg={{
        url:
          "https://image.tmdb.org/t/p/original" + selectedMovie.backdrop_path,
      }}
    >
      {selectedMovie && <MovieBanner />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${(props) => props.backgroundImg.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-blend-mode: multiply;
`;

export default ViewMovie;
