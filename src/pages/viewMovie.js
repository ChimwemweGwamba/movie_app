import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import styled from "styled-components";
import MovieBanner from "../components/movieBanner";
import { useMovieList } from "../context/movieContext";

function ViewMovie() {
  const [loading, setLoading] = useState(true);
  const { dispatch, state: { selectedMovieID, selectedMovie } } = useMovieList();

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${selectedMovieID}?api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      console.log("results ", responseJson)

      dispatch({
        type: "SET_SELECTED_MOVIE",
        payload: responseJson.results,
      });

      window.scrollTo(0, 0);
      setLoading(false);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Container>
      {selectedMovie && <MovieBanner />}

      {loading && (
        <Loader>
          <Rings
            height="80"
            width="80"
            color="#4fa94d"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </Loader>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

export default ViewMovie;
