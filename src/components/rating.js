import React from "react";
import styled from "styled-components";

function Rating(props) {
  const color = {
    main: props.ratingsColor,
  };

  return (
    <Container color={color}>
      <RatingValue>{props.ratings}%</RatingValue>
    </Container>
  );
}

const Container = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  padding: 2px;
  background: ${(props) => props.color.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RatingValue = styled.p`
  color: white;
  font-weight: bold;
  font-size: 10px;
`;

export default Rating;
