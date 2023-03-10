import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  return (
    <Container>
        <Logo>
        <span>V</span>
        <p>stream</p>
        </Logo>
        <Text>© Developed by <a href='https://github.com/codegoggins'><em>codegoggins.</em></a></Text>
    </Container>
  )
}

export default Footer


// <----------------------------------------- CSS ------------------------------------------------->


const Container = styled.div`
  background-color:#1c1d1f;
  height: 5rem;
  width:full;
  padding: 1rem 3rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
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

const Text = styled.p`
 color: white;
`