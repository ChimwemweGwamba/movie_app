import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Banner from '../components/banner'
import Movies from '../components/movies'
import Navbar from '../components/navbar'



function Home() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17'

      try {
        const response = await fetch(url)
        const responseJson = await response.json()
        setMovies(responseJson.results) 
      } catch (e) {
        console.log('error: ', e); 
      }
  }
    
  useEffect(() => { getMovies() }, [])


  return (
    <Container>
      <Navbar></Navbar>

      {movies.length > 0 ? (
        <div>
          <Banner movie={movies[0]} />
          <Movies movies={movies} heading={'Top Popular Movies'} subHeading={'POPULAR'} />
        </div>
        ) : (
          <p>Unable to fetch data...</p>
        )}


    </Container>
  )
}


const Container = styled.div`
width: 100%;
`

export default Home