import React, { useState } from 'react'
import styled from 'styled-components'
import likedStar from '../assets/images/star.png'
import star from '../assets/images/star2.png'
import { device } from '../data/devices'



function Movie(props) {

  const [liked, setLiked] = useState(props.movie.favourite);

  function handleClick () {
    setLiked(!props.movie.favourite)
  }

  return (
    <Container>
        <ImageContainer>
            <MovieImage src={'https://image.tmdb.org/t/p/w500' + props.movie.poster_path}></MovieImage>
            <MovieDesc>{props.movie.overview}</MovieDesc>
        </ImageContainer>

        <MovieTitle>{props.movie.title}</MovieTitle>

        <MovieRatingContainer>
            <Rating>Rating: {props.movie.vote_average * 10}%</Rating>
            
            <Favourite>
              {liked === true &&
                <FavIcon src={likedStar} onClick={handleClick}></FavIcon>
              }

              {liked === false &&
                <FavIcon src={star} onClick={handleClick}></FavIcon>
              }
            </Favourite>
        </MovieRatingContainer>
    </Container>
  )
}


const Container = styled.div`
  width: fit-content;
  margin: 50px 0;
  width: 100%;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1)
  }


  @media ${device.desktop}{
  width: fit-content;
  margin: 50px 2.5% 50px 2.5%;
  width: 20%;
  }

`

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
`

const MovieImage = styled.img`
    width: 100%;
`;

const MovieDesc = styled.p`
  position: absolute;
  background-color: rgba(0,0,0,0.9); 
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
  padding: 15px 0;
  margin: 0;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${device.desktop}{
    font-size: 20px;
  }
`

const MovieRatingContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Rating = styled.p`
  color: white;
  margin: 0;
  font-size: 13px;
  font-weight: 200;
`

const Favourite = styled.div`

`

const FavIcon = styled.img`
    height: 20px;
`

export default Movie