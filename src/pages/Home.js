import React, { useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'

import OnlineShoppingLight from '../assets/about/online_shopping_light.svg'
import OnlineShoppingDark from '../assets/about/online_shopping_dark.svg'
import ProjectTeamLight from '../assets/about/project_team_light.svg'
import ProjectTeamDark from '../assets/about/project_team_dark.svg'
import ScrumLight from '../assets/about/scrum_board_light.svg'
import ScrumDark from '../assets/about/scrum_board_dark.svg'

import { ReactComponent as GithubIcon } from '../assets/brands/github-brands.svg'
import { ReactComponent as CodepenIcon } from '../assets/brands/codepen-brands.svg'
import { ReactComponent as LinkedinIcon } from '../assets/brands/linkedin-in-brands.svg'
import { ReactComponent as MediumIcon } from '../assets/brands/medium-brands.svg'
import { ReactComponent as InstagramIcon } from '../assets/brands/instagram-brands.svg'
import { ReactComponent as YoutubeIcon } from '../assets/brands/youtube-brands.svg'

import LightMode from '../assets/light_mode.svg'
import DarkMode from '../assets/dark_mode.svg'


const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

const H1 = styled.h1`
  font-family: 'Kaushan Script', cursive;
  font-size: 100px;
  margin: 0 0 10px;
`

const Header = styled.header`
  z-index: 10;
  position: fixed;
  font-family: Oswald, sans-serif;
  font-size: 24px;
  letter-spacing: 3px;
  padding: 25px;
  width: 100vw;
  background: rgb(255 255 255 / 50%);
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const A = styled.a`
  margin-right: 25px;
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
  border-bottom: 3px solid transparent;
  font-weight: bold;
  :hover {
    color: ${({ theme }) => theme.onBackground};
    border-bottom: 3px solid;    
  }
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.onBackgroundAlt};
  font-size: 32px;
  font-weight: normal;
`

const AboutCard = styled.div`
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  margin: 0 10px;
  box-shadow: 0 10px 14px 2px rgba(163,163,163,1);
`

const Button = styled.button`
  min-width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: white;
  outline: none;
  cursor: pointer;

  ${props => props.primary && css`
    background: ${({ theme }) => theme.primaryColor};
    &:hover {
      filter: brightness(110%);
    }
  `}
  
  ${props => props.secondary && css`
    background: ${({ theme }) => theme.secondaryColor};    
    &:hover {
      filter: brightness(110%);
    }
  `}
  
  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.4;
  `}
  
  ${props => props.outline && css`
    background: ${({ theme }) => theme.background};    
    color: ${({ theme }) => theme.onBackground};
    &:hover {
      filter: none;
      color: ${({ theme }) => theme.background};
    }
  `}
 
  
  ${props => props.outline && props.primary && css`
    border: 2px solid ${({ theme }) => theme.primaryColor};    
    &:hover {
      background: ${({ theme }) => theme.primaryColor};
    }
  `}
  
  ${props => props.outline && props.secondary && css`
    border: 2px solid ${({ theme }) => theme.secondaryColor};
    &:hover {
      background: ${({ theme }) => theme.secondaryColor};
    }
  `}
  
  ${props => props.disabled && props.outline && css`
    cursor: not-allowed;
    opacity: 0.4;
    &:hover {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.onBackground};
    }
  `}
`

const ProjectCard = styled.div`
  color: white;
  background: ${({ theme }) => theme.onBackgroundAlt};
  padding: 32px;
  line-height: 24px;
  font-weight: lighter;
  border-radius: 10px;
  width: 50%;
  margin-top: 64px;
`

const IconButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primaryColor};
  :hover {
    color: ${({ theme }) => theme.onBackground};    
  }
`

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  
  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  ${props => props.round && css`
    border-radius: 34px;
    :before {
      border-radius: 50%;
    }
  `}
`

const SliderInput = styled.input`
  :checked + ${Slider} {
    background-color: #2196F3;
  }
  
  :focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }
  
  :checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`


function Home() {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Header>
        <nav>
          <A href='#home'>HOME</A>
          <A href='#about'>ABOUT</A>
          <A href='#projects'>PROJECTS</A>
          <A href='#contact'>CONTACT</A>
        </nav>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>Light mode</div>
          <img src={LightMode} alt='sun' style={{ width: 50, height: 50 }} />
          <Switch>
            <SliderInput type='checkbox' />
            <Slider round />
          </Switch>
        </div>
      </Header>
      {/*----- Home Section -----*/}
      <Section id='home'>
        <div style={{ textAlign: 'center' }}>
          <H1>Custom Title Here</H1>
          <H2>Welcome to the website</H2>
        </div>
      </Section>

      {/*----- About Section -----*/}
      <Section id='about'>
        <h1>Undraw Illustrations</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <AboutCard>
            <H2>Online shopping</H2>
            <img src={OnlineShoppingLight} alt='woman holding a phone aside to shopping webpage'
                 style={{ height: 300, width: 300, padding: 20 }} />
          </AboutCard>
          <AboutCard>
            <H2>Project Team</H2>
            <img src={ProjectTeamLight} alt='man holding scrum histories and woman with laptop'
                 style={{ height: 300, width: 300, padding: 20 }} />
          </AboutCard>
          <AboutCard>
            <H2>Scrum Methodology</H2>
            <img src={ScrumLight} alt='man and woman managing an kanban board'
                 style={{ height: 300, width: 300, padding: 20 }} />
          </AboutCard>
        </div>
      </Section>

      {/*----- Projects Section -----*/}
      <Section id='projects'>
        <H1>Buttons</H1>
        <div style={{ display: 'flex', flexDirection: 'row', columnGap: 15 }}>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button primary disabled>Disabled</Button>
          <Button primary outline>Outline</Button>
          <Button secondary outline>Alt Outline</Button>
          <Button primary outline disabled>Disabled</Button>
        </div>
        <ProjectCard>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis voluptatum.
          Adipisci autem consectetur consequatur cumque dicta eum exercitationem ipsum molestiae
          quasi quibusdam, quisquam reiciendis, soluta suscipit temporibus totam unde!
        </ProjectCard>
      </Section>

      {/*----- Contact Section -----*/}
      <Section id='contact' style={{ flexDirection: 'row', columnGap: 40 }}>
        <IconButton>
          <GithubIcon style={{ width: 100, height: 100 }} />
        </IconButton>
        <IconButton>
          <CodepenIcon style={{ width: 100, height: 100 }} />
        </IconButton>
        <IconButton>
          <LinkedinIcon style={{ width: 100, height: 100 }} />
        </IconButton>
        <IconButton>
          <MediumIcon style={{ width: 100, height: 100 }} />
        </IconButton>
        <IconButton>
          <InstagramIcon style={{ width: 100, height: 100 }} />
        </IconButton>
        <IconButton>
          <YoutubeIcon style={{ width: 100, height: 100 }} />
        </IconButton>
      </Section>
    </>
  )
}

export default Home
