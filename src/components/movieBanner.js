import React from "react";
import styled from "styled-components";
import { device } from "../devices/devices";
import { useMovieList } from "../context/movieContext";
import SimilarMovies from "./similarMovies";
import { Rings } from "react-loader-spinner";

function MovieBanner() {
  const {
    state: { selectedMovie },
  } = useMovieList();

  return (
    <Container>
      {selectedMovie.length === 0 ? (
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
      ) : (
        <TopSection>
          <ImageContainer>
            <MovieImage
              src={
                "https://image.tmdb.org/t/p/w500" + selectedMovie.poster_path
              }
              onError={(e) =>
                (e.target.onerror = null)(
                  (e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/c/c4/Fox_movietone_2.jpg")
                )
              }
            ></MovieImage>
          </ImageContainer>

          <TextContainer>
            <MovieTitle>{`${
              selectedMovie.title
            } (${selectedMovie.release_date.slice(0, 4)})`}</MovieTitle>
            <MovieDesc>{selectedMovie.overview}</MovieDesc>
          </TextContainer>
        </TopSection>
      )}

      <SimilarMoviesContainer>
        <SimilarMovies />
      </SimilarMoviesContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 50%;

  @media ${device.desktop} {
    width: 25%;
  }
`;
const MovieImage = styled.img`
  width: 100%;
`;

const TextContainer = styled.div`
  width: 80%;
  margin: 0 10%;

  @media ${device.desktop} {
    width: 55%;
    margin: 0;
  }
`;

const MovieTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: white;

  @media ${device.desktop} {
    text-align: left;
    font-size: 30px;
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
`;

const SimilarMoviesContainer = styled.div``;

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

export default MovieBanner;
