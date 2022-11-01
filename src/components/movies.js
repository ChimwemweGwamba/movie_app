import styled from 'styled-components'
import Movie from './movie'




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
margin: 100px 0;
padding: 0 70px;
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
padding: 50px 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
`

export default Movies