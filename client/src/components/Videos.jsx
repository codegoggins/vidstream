import React from 'react'
import styled from 'styled-components'
import VideoCard from './VideoCard'
import {Link} from 'react-router-dom'


const Videos = () => {
  return (
    <Container>
    <Link to='/:id'>
        <VideoCard/>
    </Link>
    
    <Link to='/:id'>
        <VideoCard/>
    </Link>

    <Link to='/:id'>
        <VideoCard/>
    </Link>

    <Link to='/:id'>
        <VideoCard/>
    </Link>

    <Link to='/:id'>
        <VideoCard/>
    </Link>

    <Link to='/:id'>
        <VideoCard/>
    </Link>

    <Link to='/:id'>
        <VideoCard/>
    </Link>

    <Link to='/:id'>
        <VideoCard/>
    </Link>

    <Link to='/:id'>
        <VideoCard/>
    </Link>

    </Container>
  )
}

export default Videos


// <----------------------------------------- CSS ------------------------------------------------->


const Container = styled.div`
padding: 0 1rem;
display:grid;
grid-template-columns: 1fr;
gap: 3rem;
margin-top: 3rem;


@media(min-width:768px){
  grid-template-columns:repeat(2,1fr);
}

@media(min-width:1100px){
  grid-template-columns:repeat(3,1fr);
}

`