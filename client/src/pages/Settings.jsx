import React from 'react'
import styled from 'styled-components'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const Settings = () => {
  return (
    <Container>
        <Top src='https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <User>
            <Profile>
                <img className='profile-img' src="https://images.pexels.com/photos/15031644/pexels-photo-15031644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='upload'>
                <label htmlFor="img-upload">
                <CameraAltOutlinedIcon fontSize='medium'/>
                </label>
                <input type="file" id='img-upload' style={{"display":"none"}}/>
                <p>Upload Image</p>
                </div>
            </Profile>
            <Details>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <input type="email" placeholder='Email'/>
                <button>Update</button>
            </Details>
        </User>
    </Container>
  )
}

export default Settings

// <----------------------------------------- CSS ------------------------------------------------->

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const Top = styled.img`
object-fit: cover;
margin: 0 auto;
height: 50vh;
width: 100vw;
`;

const User = styled.div`
display: flex;
padding: 1rem;

@media(max-width:800px){
  flex-direction: column;
  gap: 2rem;
}

`;

const Profile = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;

.profile-img{
    object-fit: cover;
    height: 20rem;
    width: 20rem;
    border-radius: 1rem;
}

.upload{
    display: flex;
    align-items: center;
    gap: 0.3rem;

    p{
        font-size: 1.1rem;
    }
}

`;

const Details = styled.form`
flex: 1;
display: flex;
flex-direction: column;
gap: 3rem;
align-items: center;

input{
    font-size: 1rem;
    border: none;
    padding: 0.8rem 8rem 0.8rem 0.5rem;
    border-radius: 0.5rem;
    background-color: #1c1d1f;
    color: grey;
    width: 90%;
    &::placeholder{
        color: grey;
    }
    &:focus{
        outline: none;
    }
   }
   button{
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.8rem;
    background-color:#e473ff;
    color:white;
    width: 50%;
   }
`;