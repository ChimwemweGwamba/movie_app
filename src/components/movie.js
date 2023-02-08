import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Rating from "./rating";
import { device } from "../devices/devices";

function Movie(props) {
  return (
    <Container>
      <Link
        to={"/movie/" + props.movie.id}
        state={props.movie.id}
        style={{ textDecoration: "none" }}
      >
        <ImageContainer>
          <MovieImage
            src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
          ></MovieImage>
          <MovieDesc>{props.movie.overview}</MovieDesc>
        </ImageContainer>

        <MovieContainer>
          <MovieTitle>{props.movie.title}</MovieTitle>
          <Rating
            ratings={props.movie.vote_average * 10}
            ratingsColor={
              props.movie.vote_average >= 8.0
                ? "green"
                : props.movie.vote_average >= 6.5
                ? "orange"
                : "red"
            }
          />
        </MovieContainer>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  margin: 50px 0;
  width: 100%;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media ${device.desktop} {
    width: fit-content;
    margin: 50px 2.5% 50px 2.5%;
    width: 20%;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const MovieImage = styled.img`
  width: 100%;
`;

const MovieDesc = styled.p`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  color: white;
  margin: 0;
  padding: 20px 10px;
  text-align: left;
  font-size: 13px;
  font-weight: 300;
  line-height: 20px;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const MovieTitle = styled.p`
  color: white;
  font-size: 25px;
  margin: 0;
  width: 80%;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${device.desktop} {
    font-size: 17px;
  }
`;

export default Movie;
