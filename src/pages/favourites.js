import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Movies from '../components/movies'
import Navbar from '../components/navbar'


function Favourites() {
    const [movies, setMovies] = useState([]);
  
    // const getFavouriteMovies = () => {
    //   let favouriteMovies = []

    //   for (let i=0; i<movieList.getState().movies.length; i++){
    //     if(movieList.getState().movies[i].favourite){
    //       favouriteMovies.push(movieList.getState().movies[i])
    //     }
    //   }

    //   setMovies(favouriteMovies)
    //   }
  

    // useEffect(() => {
    //     getFavouriteMovies();
    // }, [])


  return (
    <Container>
        <Navbar></Navbar>
        {/* <Movies movies={movies} heading={'Your Favourite Movies'} subHeading={'YOUR LIKED MOVIES'}></Movies> */}
    </Container>
  )
}


const Container = styled.div`
width: 100%;
`


export default Favourites