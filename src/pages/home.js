import React, { useEffect, useState, useReducer } from "react";
import { Rings } from "react-loader-spinner";
import styled from "styled-components";
import HomeBanner from "../components/homeBanner";
import Movies from "../components/movies";
import NavBar from "../components/navbar";
import { useMovieList } from "../context/movieContext";

function Home() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const {
    dispatch,
    state: { movieList },
  } = useMovieList();

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      dispatch({
        type: "SET_MOVIE_LIST",
        payload: responseJson.results,
      });

      setLoading(false);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  //Fetch new page of movies on scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <NavBar />
      {movieList && (
        <div>
          <HomeBanner />
          <Movies
            heading="Popular Movies"
            subHeading="Top Movies"
            page="home"
          />
        </div>
      )}

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

export default Home;
