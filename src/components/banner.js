import React from 'react'
import styled , { css } from 'styled-components'



function Banner(props) {

  return (
    <Container backgroundImg={{ url:'https://image.tmdb.org/t/p/original' + props.movie.backdrop_path}}>
        <TextContainer>
            <MovieDesc  primary>Todays Top Rated</MovieDesc>
            <MovieTitle>{props.movie.title}</MovieTitle>
            <MovieDesc>{props.movie.overview}</MovieDesc>
        </TextContainer>
    </Container>
  )
}



const Container = styled.div`
  height: 95vh;
  padding: 0px 70px;
  display: flex;
  align-items: center;

  background-image: linear-gradient(90deg, rgba(0,0,0,0.8496586134453782) 40%, rgba(255,255,255,0) 81%), linear-gradient(0deg, rgba(0,0,0,0.6496586134453782) 5%, rgba(255,255,255,0) 91%), url('${props => props.backgroundImg.url}'); 
  background-repeat: no-repeat;
  background-size: cover;
`

const TextContainer = styled.div`
  width: 40%;
`

const MovieTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
  text-align: left;
  color: white;
`

const MovieDesc = styled.p`
  text-align: left;
  color: white;
  font-size: 15px;
  line-height: 25px;

  ${props => props.primary && css`
    color: red;
  `}
`


export default Banner