import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import styled from "styled-components";
import MovieBanner from "../components/movieBanner";
import { MovieContext } from "../context/movieContext";
import { useMovieList } from "../context/movieContext";

function ViewMovie() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state: { movieList }} = useMovieList();

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieList[0].id}?api_key=${process.env.REACT_APP_API_KEY}`;

    console.log(movieList[0])
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      //setMovie(responseJson);
      window.scrollTo(0, 0);
      setLoading(false);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (

    <div>
      
    </div>
    // <MovieContext.Provider value={movieList[0]}>
    //   <Container>
    //     {movie && (
    //         <MovieBanner />
    //     )}

    //     {loading && (
    //       <Loader>
    //         <Rings
    //           height="80"
    //           width="80"
    //           color="#4fa94d"
    //           radius="6"
    //           wrapperStyle={{}}
    //           wrapperClass=""
    //           visible={true}
    //           ariaLabel="rings-loading"
    //         />
    //       </Loader>
    //     )}
    //   </Container>
    // </MovieContext.Provider>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

export default ViewMovie;
