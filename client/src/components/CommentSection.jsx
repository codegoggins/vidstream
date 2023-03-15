import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const CommentSection = () => {
  return (
    <Container>
        <p className='title'>Comments</p>
        <div className='post-comment'>
            <input type="text" placeholder='Enter comment'/>
            <p><SendOutlinedIcon/></p>
        </div>
        <div className='comments'>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </Container>
  )
}

export default CommentSection


// <----------------------------------------- CSS ------------------------------------------------->

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 0rem 3rem 5rem 3rem;

.title{
    font-size: 1.2rem;
}

input{
    width: 80%;
    font-size: 1rem;
    border: none;
    border-bottom: 0.08rem solid white;
    padding: 0.8rem 2rem 0.8rem 0.5rem;
    border-radius: 0.3rem;
    background:transparent;
    color: grey;
    &::placeholder{
        color: grey;
    }
    &:focus{
        outline: none;
    }
}

.post-comment{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.comments{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

`;