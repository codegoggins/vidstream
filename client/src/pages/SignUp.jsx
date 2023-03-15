import React from 'react'
import styled from 'styled-components'


const SignUp = () => {
  return (
    <Container>
        <Title>Sign Up</Title>
        <Form>
           <input type='email' placeholder='Email'/>
           <input type="text" placeholder='Username'/>
           <input type='password' placeholder='Password'/>
           <button>Sign Up</button>
           <p>or</p>
           <button>Sign Up with Google</button>
        </Form>
    </Container>
  )
}

export default SignUp



// <----------------------------------------- CSS ------------------------------------------------->

const Container = styled.div`
height:70vh;
width:25rem;
border: 1px solid #e473ff;
border-radius: 1rem;
margin: 1rem auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:2rem;
padding: 1rem;

@media(max-width:800px){
  width:20rem;
}

`;

const Title = styled.h1``

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1.5rem;

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

    @media(max-width:800px){
      padding: 0.8rem 5rem 0.8rem 0.5rem;
    }
   }
   button{
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.8rem;
    background-color:#e473ff;
    color:white;
   }

   p{
    text-align: center;
   }
`

