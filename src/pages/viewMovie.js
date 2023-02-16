import React, { useEffect } from "react";
import styled from "styled-components";
import MovieBanner from "../components/movieBanner";
import { useMovieList } from "../context/movieContext";
import { useParams } from "react-router-dom";

function ViewMovie() {
  const params = useParams();
  const { dispatch, state: { selectedMovie } } = useMovieList();

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
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
  }, [params.movieId]);

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
