import React from 'react'
import styled from 'styled-components'
import Video from './Video'

const Container = styled.div`
padding: 3rem;
`;

const Videos = () => {
  return (
    <Container>
        <Video/>
    </Container>
  )
}

export default Videos