import React from 'react'
import styled from 'styled-components'
import Notification from './Notification'

const Notifications = ({show}) => {
  return (
    <Container show={show}>
    <Title>Notifications</Title>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
    </Container>
  )
}

export default Notifications

// <----------------------------------------- CSS ------------------------------------------------->

const Title = styled.p`
padding:1rem;
`;

const Container = styled.div`
display: ${({ show }) => (show ? 'flex' : 'none')};
flex-direction: column;
gap: 1rem;
position: absolute;
background-color:#1c1d1f;
border-radius: 1rem 0rem 1rem 1rem;
height: 30rem;
width: 20rem;
top: 4rem;
right: 10rem;
overflow-y: scroll;
`;