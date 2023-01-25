import React from 'react'
import styled , { css } from 'styled-components'
import { device } from '../data/devices'



function Banner(props) {

  return (
    <Container backgroundImg={{ url:'https://image.tmdb.org/t/p/original' + props.movie.backdrop_path}}>
        <TextContainer>
            <MovieDesc  primary>Todays Pick</MovieDesc>
            <MovieTitle>{props.movie.title}</MovieTitle>
            <MovieDesc>{props.movie.overview}</MovieDesc>
        </TextContainer>
    </Container>
  )
}



const Container = styled.div`
  height: 95vh;
  width:100%;

  display: flex;
  align-items: center;
  background-image: linear-gradient(90deg, rgba(0,0,0,0.8496586134453782) 40%, rgba(255,255,255,0) 81%), linear-gradient(0deg, rgba(0,0,0,0.6496586134453782) 5%, rgba(255,255,255,0) 91%), url('${props => props.backgroundImg.url}'); 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media ${device.desktop}{
    height: 95vh;
  }
`

const TextContainer = styled.div`
  width: 80%;
  margin: 0 10%;

  @media ${device.desktop}{
    width: 40%;
    margin: 0 5%;
  }
`

const MovieTitle = styled.h1`
  font-size: 35px;
  font-weight: 900;
  text-align: center;
  color: white;
  
  @media ${device.desktop}{
    text-align: left;
    font-size: 50px;
  }
`

const MovieDesc = styled.p`
  text-align: center;
  color: white;
  font-size: 15px;
  line-height: 25px;

  @media ${device.desktop}{
    text-align: left;
  }

  ${props => props.primary && css`
    color: red;
  `}
`


export default Banner