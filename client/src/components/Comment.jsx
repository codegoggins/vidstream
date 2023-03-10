import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items:flex-start;
gap: 0.8rem;
justify-content: center;
font-size: 0.9rem;

.user-img{
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
    border-radius: 0.5rem;
}

.user-comment{
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    .coment-content{
        color: whitesmoke;
    }
}


`;

const Comment = () => {
  return (
    <Container>
         <img className='user-img' src='https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
         <div className='user-comment'>
            <p className='user-name'>Nilay Singh</p>
            <p className='coment-content'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id velit quas eveniet. Voluptate excepturi minus perferendis harum vero libero accusantium, rerum nesciunt, consequuntur quidem dolores? Voluptatem ullam maxime ipsum minima?
            </p>
         </div>
    </Container>
  )
}

export default Comment