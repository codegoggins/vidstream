import React, { useState } from 'react'
import styled from 'styled-components';
import {IoMdNotificationsOutline} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Notifications from './Notifications';

const Navbar = () => {

  const [toggle,setToggle] = useState(false);  

  const handlePopup = () => {
     setToggle(!toggle);
  }

  return (
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
                <p onClick={handlePopup}>
                    <IoMdNotificationsOutline/>
                </p>
                <img src="https://images.pexels.com/photos/15031644/pexels-photo-15031644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Left>
          <Notifications show={toggle}/>
     </Container>
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
    cursor: pointer;
}

`;
