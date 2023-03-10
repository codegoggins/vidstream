import React from 'react'
import styled from 'styled-components'

const Notification = () => {
  return (
    <Container>
        <p>Lorem ipsum dolor sit m placeat, quaerat id hic quasi! Ad a earum sapiente aspernatur? Ipsam, rerum aspernatur?</p>
    </Container>
  )
}

export default Notification

const Container = styled.div`
border-bottom: 0.03rem solid grey;
margin:0 0.4rem;
p{
    padding: 0.8rem;
    font-size: 0.8rem;
}
`;