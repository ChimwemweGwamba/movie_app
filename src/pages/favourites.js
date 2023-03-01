import React, { useEffect } from "react";
import styled from "styled-components";
import Movies from "../components/movies";
import Navbar from "../components/navbar";


function Favourites() {

  return (
    <Container>
      <Navbar/>
      <Movies heading="Favourites" subHeading="Your Favourite Movies" page="favourites"/>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

export default Favourites;
