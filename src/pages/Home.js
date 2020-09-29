import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const TitleGroup = styled.div`
  text-align: center;
`

const CustomTitle = styled.h1`
  font-family: 'Kaushan Script', cursive;
  font-size: 100px;
`

const Nav = styled.nav`
  z-index: 10;
  position: fixed;
  font-family: Oswald, sans-serif;
  font-size: 24px;
  letter-spacing: 3px;
  padding: 25px;
  width: 100vw;
  background: rgb(255 255 255 / 50%);
`

const A = styled.a`
  margin-right: 25px;
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
  border-bottom: 3px solid transparent;
  font-weight: bold;
  :hover {
    color: ${({theme}) => theme.onBackground};
    border-bottom: 3px solid;    
  }
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.onBackgroundAlt};
  font-size: 32px;
  font-weight: normal;
`


function Home() {
  return (
    <>
      <Nav>
        <A href='#home'>HOME</A>
        <A href='#about'>ABOUT</A>
        <A href='#projects'>PROJECTS</A>
        <A href='#contact'>CONTACT</A>
      </Nav>
      {/*----- Home Section -----*/}
      <Section id='home'>
        <TitleGroup>
          <CustomTitle>Custom Title Here</CustomTitle>
          <H2>Welcome to the website</H2>
        </TitleGroup>
      </Section>

      {/*----- About Section -----*/}
      <Section id='about'>
        <h1>Undraw Illustrations</h1>
      </Section>

      {/*----- Projects Section -----*/}
      <Section id='projects'>
        <h1>Buttons</h1>
      </Section>

      {/*----- Contact Section -----*/}
      <Section id='contact'>
        <h1>a</h1>
      </Section>
    </>
  )
}

export default Home
