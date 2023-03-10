import React from 'react'
import styled from 'styled-components'
import VideoCard from './VideoCard'


const Container = styled.div`
padding: 4rem;
display:grid;
grid-template-columns:1fr;
gap:3rem;

@media(min-width:768px){
  grid-template-columns:repeat(2,1fr);
}

@media(min-width:1000px){
  grid-template-columns:repeat(3,1fr);
}


`

const Videos = () => {
  return (
    <Container>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
    </Container>
  )
}

export default Videos