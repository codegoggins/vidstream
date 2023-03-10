import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 0rem 3rem;

input{
    font-size: 1rem;
    border: none;
    padding: 0.8rem 8rem 0.8rem 0.5rem;
    border-radius: 0.3rem;
    background-color: #1c1d1f;
    color: grey;
    &::placeholder{
        color: grey;
    }
    &:focus{
        outline: none;
    }
}

.comments{
    display: flex;
    flex-direction: column;
}

`;

const CommentSection = () => {
  return (
    <Container>
        <p className='title'>Comments</p>
        <input type="text" placeholder='Enter a comment'/>
        <div className='comments'>
            <Comment/>
        </div>
    </Container>
  )
}

export default CommentSection