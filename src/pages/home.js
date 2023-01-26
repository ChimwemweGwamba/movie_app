import React, { useEffect, useState } from 'react'
import { Rings } from 'react-loader-spinner'
import styled from 'styled-components'
import Banner from '../components/banner'
import Movies from '../components/movies'
import Navbar from '../components/navbar'




function Home() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)


  const getMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`

      try {
        const response = await fetch(url)
        const responseJson = await response.json()
        setMovies(prev => [...prev, ...responseJson.results])
        setLoading(false)
      } catch (e) {
        console.log('error: ', e); 
      }
  }

  const handleScroll = () => {

    if (window.innerHeight + document.documentElement.scrollTop + 1 >= 
      document.documentElement.scrollHeight
      ) {
      setLoading(true)
      setPage(prev => prev+ 1)
    }
  }

  useEffect(() => { getMovies() }, [page])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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


      {
        loading && 
        <Loader>
          <Rings
            height="80"
            width="80"
            color="#4fa94d"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </Loader>
      }



    </Container>
  )
}


const Container = styled.div`
width: 100%;
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
`

export default Home