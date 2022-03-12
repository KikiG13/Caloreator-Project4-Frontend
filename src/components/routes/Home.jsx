import React from 'react'
import styled from 'styled-components'
// import Logo from '../styled/Logo'

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  // border: 2px solid black;
`

const Home = () => {
  return (
      <Logo>
        <img src= "https://i.imgur.com/zNsoNvI.png" alt="Caloreator Logo" width="200" height="125"></img>
      </Logo>
    )
}


export default Home
