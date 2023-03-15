import React, { useState } from 'react'
import styled from 'styled-components';
import {IoMdNotificationsOutline} from 'react-icons/io'
import {Link} from 'react-router-dom'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Navbar = () => {

  const [toggle,setToggle] = useState(false);  
  const [open,setOpen] = useState(false);  

  const handleOpen = () => {
    setOpen(!open);
  }
  

  return (
      <>
     <Container>
        <Link to='/'>
          <Right>
              <span>V</span>
              <p>stream</p>
          </Right>
        </Link>
          <Center>
              <input type="text" placeholder='Search'/>
          </Center>
          <Left>
                <img src="https://images.pexels.com/photos/15031644/pexels-photo-15031644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <Link to='settings'>
                <SettingsOutlinedIcon/>
                </Link>
                <Link to='/signin'>
                <div className='signin'>
                <LoginOutlinedIcon/>
                <p>Sign In</p>
                </div> 
                </Link>
                <Link to='/signup'>
                <div className='signup'>
                <HowToRegOutlinedIcon/>
                <p>Sign Up</p>
                </div> 
                </Link>
          </Left>
          <SideMenuBtn onClick={handleOpen}>
              <MenuOutlinedIcon fontSize='large'/>
          </SideMenuBtn>
     </Container>


{/* <-------------------------------------------------- SIDE MENU ----------------------------------------------------------------> */}
    {
        open && 
     <SideMenu>
           <Close onClick={handleOpen}>
              <CloseOutlinedIcon fontSize='large'/>
           </Close>
          <SideMenuCenter>
              <input type="text" placeholder='Search'/>
          </SideMenuCenter>
          <SideMenuLeft>
                <div className='profile'>
                <img src="https://images.pexels.com/photos/15031644/pexels-photo-15031644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Nilay Singh</p>
                </div> 
                <Link to='/settings'>
                <div onClick={handleOpen} className='settings'>
                <SettingsOutlinedIcon/>
                <p>Settings</p>
                </div> 
                </Link>
                <Link to='/signin'>
                <div onClick={handleOpen} className='settings'>
                <LoginOutlinedIcon/>
                <p>Sign In</p>
                </div> 
                </Link>
                <Link to='/signup'>
                <div onClick={handleOpen} className='settings'>
                <HowToRegOutlinedIcon/>
                <p>Sign Up</p>
                </div> 
                </Link>
          </SideMenuLeft>
     </SideMenu>

    }

{/* <-------------------------------------------------- SIDE MENU ----------------------------------------------------------------> */}


     </>
  )
}

export default Navbar











// <----------------------------------------- CSS ------------------------------------------------->

const Container = styled.div`
height: 3rem;
padding: 3rem;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;

@media(max-width:768px){
    padding: 1rem;
    gap: 1rem;
    height: 5rem;
}

`;


const Right = styled.div`
font-weight: bold;
display: flex;
font-size: 1.5rem;
cursor: pointer;

span{
    color: #e473ff;
}
p{
    color: white;
}

`;

const Center = styled.div`

input{
    font-size: 1rem;
    border: none;
    padding: 0.8rem 8rem 0.8rem 0.5rem;
    border-radius: 0.5rem;
    background-color: #1c1d1f;
    color: grey;
    &::placeholder{
        color: grey;
    }
    &:focus{
        outline: none;
    }
}

@media(max-width:900px){
    display: none;
}

`;


const Left = styled.div`
display: flex;
align-items: center;
gap: 2rem;

p{
    font-size: 1.8rem;
    cursor: pointer;
}

img{
    height: 2.8rem;
    width: 2.8rem;
    object-fit: cover;
    border-radius:50%;
    border: 0.15rem solid #e473ff;
}

@media(max-width:900px){
    display: none;
}

.signin,.signup{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    p{
        font-size: 1.2rem;
    }
}

`;


{/* <--------------------------------------------------RESPONSIVE SIDE MENU ----------------------------------------------------------------> */}


const SideMenuBtn = styled.div`
cursor: pointer;
display: none;
@media(max-width:900px){
    display:block;
}
`;

const Close = styled.div`
width: 100%;
cursor: pointer;
display: flex;
justify-content:right;
`;

const SideMenu = styled.div`
padding: 1rem;
position: absolute;
background-color:#0d0d0f;
cursor: pointer;
width: 0vw;
height: 100vh;
z-index: 100;
top: 0;
right: 0;
display: flex;
flex-direction: column;
align-items:left;
justify-content:flex-start;
gap:3rem;
@media(max-width:900px){
    width:80vw;
}
`;


const SideMenuCenter = styled.div`
input{
    width: 95%;
    font-size: 1rem;
    border: none;
    padding: 0.8rem 8rem 0.8rem 0.5rem;
    border-radius: 0.5rem;
    background-color: #1c1d1f;
    color: grey;
    &::placeholder{
        color: grey;
    }
    &:focus{
        outline: none;
    }
}
`;


const SideMenuLeft = styled.div`
display: flex;
flex-direction: column;
align-items: left;
gap: 2rem;

p{
    font-size: 1rem;
    cursor: pointer;
}

img{
    height: 2.8rem;
    width: 2.8rem;
    object-fit: cover;
    border-radius:50%;
    border: 0.15rem solid #e473ff;
}

.profile , .settings{
    display: flex;
    align-items: center;
    gap: 1rem;
}

.settings{
    margin-left: 1rem;
}

`;

{/* <--------------------------------------------------RESPONSIVE SIDE MENU ----------------------------------------------------------------> */}




  