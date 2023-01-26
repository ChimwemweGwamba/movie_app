import React from 'react'
import styled from 'styled-components'


function Rating(props) {
  return (
    <Container>
        <RatingValue>
            {props.ratings}%
        </RatingValue>
    </Container>
  )
}


const Container = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
background: red;
display: flex;
align-items: center;
justify-content: center;
`

const RatingValue = styled.p`
color: white;
font-weight: bold;
font-size: 13px;
`

export default Rating