import React from 'react'
import styled from 'styled-components'
import Video from './Video'

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
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
    </Container>
  )
}

export default Videos