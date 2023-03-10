import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 22rem;
cursor: pointer;
gap:0.5rem;

.video-img{
    border-radius: 0.3rem;
}


.video-details{
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    
    .video-title{
    font-weight: 500;
    font-size: 1.2rem;
    }
    
    .user-details{

        display: flex;
        align-items: center;
        gap: 0.5rem;

        .user-name{
        font-weight: 300;
        color: grey;
        font-size: 0.8rem;
        }

        .user-img{
            border-radius: 0.3rem;
            height: 1.5rem;
            width: 1.5rem;
            object-fit: cover;
        }
    }
}

`;

const Video = () => {
  return (
    <Container>
        <img className='video-img' src="https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='video-details'>
            <p className='video-title'>
                Scuba Diving
            </p>
            <div className='user-details'>
            <img className='user-img' src="https://images.pexels.com/photos/15031644/pexels-photo-15031644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className='user-name'>Nilay Singh</p>
            </div>
        </div>
    </Container>
  )
}

export default Video