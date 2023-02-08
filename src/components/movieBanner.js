import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../devices/devices";
import Rating from "./rating";
import SimilarMovies from "./similarMovies";
import { useMovie } from "../context/movieContext";

function MovieBanner() {
  const Movie = useMovie();

  return (
    Movie && (
      <Container
        backgroundImg={{
          url: "https://image.tmdb.org/t/p/original" + Movie.backdrop_path,
        }}
      >
        <TopSection>
          <ImageContainer>
            <MovieImage
              src={"https://image.tmdb.org/t/p/w500" + Movie.poster_path}
            ></MovieImage>
          </ImageContainer>

          <TextContainer>
            <MovieTitle>{`${Movie.title} (${Movie.release_date})`}</MovieTitle>
            <MovieDesc>{Movie.overview}</MovieDesc>
            <Rating
              ratings={Math.round(Movie.vote_average * 10)}
              ratingsColor={
                Movie.vote_average >= 8.0
                  ? "green"
                  : Movie.vote_average >= 6.5
                  ? "orange"
                  : "red"
              }
            />
          </TextContainer>
        </TopSection>

        <SimilarMoviesContainer>
          <SimilarMovies movieId={Movie.id} />
        </SimilarMoviesContainer>
      </Container>
    )
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url("${(props) => props.backgroundImg.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-color: #393939;
  background-blend-mode: multiply;

  @media ${device.desktop} {
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 100px;
`;

const ImageContainer = styled.div`
  width: 25%;
  position: relative;
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

const SimilarMoviesContainer = styled.div`
  @media ${device.desktop} {
  }
`;

export default MovieBanner;
