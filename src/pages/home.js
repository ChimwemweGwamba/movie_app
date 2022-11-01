import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStore, useStoreActions } from 'easy-peasy'
import Banner from '../components/banner'
import Movies from '../components/movies'
import Navbar from '../components/navbar'



function Home() {

  const movieList = useStore(state => state.movies)
  const addMovies = useStoreActions((actions) => actions.addMovies);

  const [topRated, setTopRated] = useState([]);
  const [movies, setMovies] = useState([]);


  // Get list of movies
  const getMovies = async () => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17'

      if (movieList.getState().movies.length < 1 ){
        try {
          const response = await fetch(url)
          const responseJson = await response.json()
          await addMovies(responseJson.results)
  
        } catch (e) {
          console.log('error: ', e); 
        }
      }

      let topRatedMovie = getTopRatedMovie(movieList.getState().movies)
  
      setTopRated(topRatedMovie)
      setMovies(movieList.getState().movies)
    }


  // Get Top Rated Movie From Movie List   
  const getTopRatedMovie = (movies) => {
    movies.sort(function(a,b) {
      return b.vote_average - a.vote_average
    })

    return movies[0]
  }

  useEffect(() => { getMovies() }, [])


  return (
    <Container>
      <Navbar></Navbar>
      <Banner topRated={topRated}></Banner>

      <Movies movies={movies} heading={'Top Featured Movies'} subHeading={'POPULAR'}></Movies>
    </Container>
  )
}


const Container = styled.div`
width: 100%;
`

export default Home