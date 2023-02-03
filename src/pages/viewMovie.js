import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import styled from "styled-components";
import Navbar from "../components/navbar";
import MovieBanner from "../components/movieBanner";

function ViewMovie(props) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  let movie_id = 315162;

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setMovie(responseJson);
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
      <Navbar></Navbar>

      {movie ? (
        <div>
          <MovieBanner movie={movie} />
        </div>
      ) : (
        <p>Unable to fetch data...</p>
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

export default ViewMovie;
