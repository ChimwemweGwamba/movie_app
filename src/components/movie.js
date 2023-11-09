import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Rating from "./rating";
import { device } from "../devices/devices";
import likedStar from "../assets/images/star.png";
import unlikedStar from "../assets/images/star (1).png";
import { useMovieList } from "../context/movieContext";

function Movie(props) {
  const { dispatch } = useMovieList();

  const handleClick = (action, id) => {
    action === "add"
      ? dispatch({
          type: "ADD_FAVOURITE_MOVIE",
          payload: id,
        })
      : dispatch({
          type: "REMOVE_FAVOURITE_MOVIE",
          payload: id,
        });
  };

  return (
    <Container>
      <Link to={"/movie/" + props.movie.id} style={{ textDecoration: "none" }}>
        <ImageContainer>
          <MovieImage
            src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
          ></MovieImage>
          <MovieDesc>{props.movie.overview}</MovieDesc>
        </ImageContainer>
      </Link>

      <MovieContainer>
        <MovieTitle>{props.movie.title}</MovieTitle>
        <Rating
          ratings={Math.round(props.movie.vote_average * 10)}
          ratingsColor={
            props.movie.vote_average >= 8.0
              ? "green"
              : props.movie.vote_average >= 6.5
              ? "orange"
              : "red"
          }
        />
      </MovieContainer>

      <div>
        {props.movie.favMovie ? (
          <FavIcon
            src={likedStar}
            onClick={() => handleClick("remove", props.movie.id)}
          ></FavIcon>
        ) : (
          <FavIcon
            src={unlikedStar}
            onClick={() => handleClick("add", props.movie.id)}
          ></FavIcon>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  margin: 50px 0;
  width: 100%;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media ${device.desktop} {
    width: fit-content;
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
  font-size: 20px;
  font-weight: 200;
  margin: 0;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${device.desktop} {
    font-size: 15px;
  }
`;

const FavIcon = styled.img`
  height: 20px;
`;

export default Movie;
