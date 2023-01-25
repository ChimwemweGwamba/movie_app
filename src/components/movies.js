import styled from 'styled-components'
import Movie from './movie'
import { device } from '../data/devices'



function Movies(props) {

  return (
    <Container>
        <SubHeading>{props.subHeading}</SubHeading>
        <Heading>{props.heading}</Heading>

        <MovieContainer>
            {props.movies.map((movie, index) => 
                <Movie movie={movie} key={movie.id}></Movie>
            )}
        </MovieContainer>
    </Container>
  )
}


const Container = styled.div`
width: 90%;
margin: 100px auto;

@media ${device.desktop}{
width: 100%;
}
`

const SubHeading = styled.p`
color: red;
text-align: center;
`

const Heading = styled.h1`
font-size: 50px;
font-weight: 900;
color: white;
text-align: center;
`

const MovieContainer = styled.div`
padding: 0;
display: flex;
flex-direction: column;

@media ${device.desktop}{
padding: 50px 0;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
}
`

export default Movies