import React from 'react'
import styled from 'styled-components'
import VideoCard from './VideoCard'


const Container = styled.div`
padding: 3rem;
display:flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap:3rem;
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