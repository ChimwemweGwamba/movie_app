import React, { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../devices/devices";

function SimilarMovies(props) {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSimilarMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/${props.movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setSimilarMovies(responseJson.results);
      setLoading(false);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    getSimilarMovies();
  }, [props.movieId]);

  return (
    <Container>
      <SectionTitle>Similar Movies</SectionTitle>

      {similarMovies && (
        <MoviesContainer>
          {similarMovies.map((movie) => (
            <Link
              to={"/movie/" + movie.id}
              style={{ textDecoration: "none" }}
              state={movie.id}
              key={movie.id}
            >
              <MovieContainer>
                <MovieImage
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                ></MovieImage>
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieContainer>
            </Link>
          ))}
        </MoviesContainer>
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
  @media ${device.desktop} {
  }
`;

const MoviesContainer = styled.h5`
  padding: 10px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const SectionTitle = styled.h4`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 13vw;
  margin: 10px;
`;

const MovieImage = styled.img`
  width: 100%;
`;

const MovieTitle = styled.p`
  color: white;
  font-size: 10px;
  padding: 10px 0;
  margin: 0;
  width: 100%;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  background-color: black;

  @media ${device.desktop} {
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

export default SimilarMovies;
