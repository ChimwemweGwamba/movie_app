import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Nav>
        <Item>
          <Link
            to="/"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </Item>

        <Item>
          <Link
            to="/favourite"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Favourite Movies
          </Link>
        </Item>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  gap: 30px;
`;

const Item = styled.li`
`;

export default Navbar;
