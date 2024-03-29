import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import CommentSection from '../components/CommentSection';

const Video = () => {
    return (
    <>
     <Container>
         <div className='video'>
         <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FG9M0aEpJGE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </div>
         <div className='video-details'>
            <p className='video-title'>
                Scuba Diving
            </p>
            <div className='video-buttons'>
              <div className='likes'>
                   <p>2,400</p>
                   <p className='like-btn'>
                       <ThumbUpOutlinedIcon/>
                   </p>
              </div>
              <div className='dislikes'>
                   <p>110</p>
                   <p className='dislike-btn'>
                       <ThumbDownOffAltOutlinedIcon/>
                   </p>
              </div>
            </div>
        </div>
        <div className='user'>
            <div className='user-details'>
                <img className='user-img' src="https://images.pexels.com/photos/15031644/pexels-photo-15031644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='user-name'>Nilay Singh</p>
            </div>
            <p className='subscribe-button'>
                subscribe
            </p>
        </div>
     </Container>
     <CommentSection/>

     </>
  )
}

export default Video



// <----------------------------------------- CSS ------------------------------------------------->

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 3rem;
gap:1rem;

.video{
    width: 95vw;
    height:30rem;
    border-radius: 1rem;
    overflow: hidden;

    @media(max-width:800px){
       width: 90vw;
       height:15rem;
    }
}

.video-details{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;

    .video-title{
        font-size: 1.6rem;
    }

    .video-buttons{
        display: flex;
        gap: 2rem;

        .likes , .dislikes{ 
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .like-btn , .dislike-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2.5rem;
            width: 2.5rem;
            border-radius:50%;
            background-color: #e473ff;
            cursor: pointer;
        }
    }

    @media(max-width:800px){
    gap: 1rem;

    .video-title{
        font-size: 1rem;
    }

    .video-buttons{
        gap: 1rem;

        .likes , .dislikes{ 
            gap: 0.4rem;
        }

        .like-btn , .dislike-btn{
            height: 2rem;
            width: 2rem;
        }
    }
    }

    
}

.user{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    .user-details{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: grey;
        cursor: pointer;
        .user-img{
            height: 3rem;
            width: 3rem;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .subscribe-button{
        background-color: #e473ff;
        padding: 0.8rem 2rem;
        border-radius: 2rem;
        cursor: pointer;
    }

    @media(max-width:800px){
        .user-details{
            gap: 0.4rem;
            .user-img{
                height: 2rem;
                width: 2rem;
            }
        }

        .subscribe-button{
            padding: 0.5rem 1rem;
        }
    }
}
    
`;
