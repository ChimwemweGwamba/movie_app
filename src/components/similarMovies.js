import React, { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../devices/devices";
import { useMovieList } from "../context/movieContext";
import { useParams } from "react-router-dom";

function SimilarMovies() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const {
    dispatch,
    state: { similarMovies },
  } = useMovieList();

  const getSimilarMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/${params.movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      dispatch({
        type: "SET_SIMILAR_MOVIES",
        payload: responseJson.results,
      });

      setLoading(false);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    getSimilarMovies();
  }, [similarMovies]);

  return (
    <Container>
      {similarMovies && (
        <div>
          <SectionTitle>Similar Movies</SectionTitle>
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
                    onError={(e) =>
                      (e.target.onerror = null)(
                        (e.target.src =
                          "https://upload.wikimedia.org/wikipedia/commons/c/c4/Fox_movietone_2.jpg")
                      )
                    }
                  ></MovieImage>
                  <MovieTitle>{movie.title}</MovieTitle>
                </MovieContainer>
              </Link>
            ))}
          </MoviesContainer>
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
width:100%;`;

const MoviesContainer = styled.div`
  padding: 10px;
  width: 80%;
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  justify-content: center;

  @media ${device.desktop} {
      flex-wrap: wrap;
    flex-direction: row;
  }
`;

const SectionTitle = styled.h1`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto;



  @media ${device.desktop} {
    width: 150px;
    padding: 30px 0;
    margin: 0px 20px;
  }
`;

const MovieImage = styled.img`
  width: 100%;
`;

const MovieTitle = styled.p`
  color: white;
  font-size: 18px;
  padding: 15px 0;
  margin: 0;
  width: 100%;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  background-color: black;

  @media ${device.desktop} {
    font-size: 13px;
    padding: 10px 0;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

export default SimilarMovies;
