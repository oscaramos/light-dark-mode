import React from 'react'
import styled from 'styled-components'

import Switch from '../components/Switch'
import Button from '../components/Button'
import A from '../components/A'
import H1 from '../components/H1'
import H2 from '../components/H2'
import IconButton from '../components/IconButton'

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

import { ReactComponent as LightMode } from '../assets/light_mode.svg'
import { ReactComponent as DarkMode } from '../assets/dark_mode.svg'
import { useDarkMode } from '../context/DarkMode'



const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
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

const AboutCardsContainer = styled.div`
  display: flex; 
  flex-direction: row;
  @media screen and (max-width: 960px) {
    flex-direction: column;    
  }
`

const AboutCard = styled.div`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.secondaryColor };
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  margin: 0 10px;
  box-shadow: 0 10px 14px 2px rgba(0, 0, 0, 0.5);
  
`

const ButtonsContainer = styled.div`
  display: flex; 
  flex-direction: row;
  gap: 15px;
  
  @media screen and (max-width: 960px) {
    flex-direction: column;  
  }
`

const ProjectCard = styled.div`
  color: ${({theme}) => theme.onPrimary};
  background: ${({theme}) => theme.isDarkMode? 'rgb(255 255 255 / 50%)': 'rgb(0 0 0 / 50%)'};
  padding: 32px;
  line-height: 24px;
  font-weight: lighter;
  border-radius: 10px;
  width: 50%;
  margin-top: 64px;
`

const ContactSection = styled(Section)`
  flex-direction: row;
  gap: 40px;
  @media screen and (max-width: 960px) {
    flex-direction: column;  
    gap: 20px;
  }
`

const DarkModeIcon = styled(DarkMode)`
  width: 30px;
  height: 30px;
  color: ${({theme}) => theme.onBackgroundAlt};
`

const LightModeIcon = styled(LightMode)`
  width: 30px;
  height: 30px;
  color: ${({theme}) => theme.onBackground};
`


function Home() {
  const [theme, toggleTheme] = useDarkMode()
  const isDarkMode = theme === 'dark'

  return (
    <>
      {/*----- Header -----*/}
      <Header>
        <nav>
          <A href='#home'>HOME</A>
          <A href='#about'>ABOUT</A>
          <A href='#projects'>PROJECTS</A>
          <A href='#contact'>CONTACT</A>
        </nav>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div>{isDarkMode ? 'Dark mode' : 'Light mode'}</div>
          {
            isDarkMode
              ? <DarkModeIcon />
              : <LightModeIcon />
          }
          <Switch checked={isDarkMode} onChange={toggleTheme} />
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
        <H1>Undraw Illustrations</H1>
        <AboutCardsContainer>
          <AboutCard>
            <H2>Online shopping</H2>
            <img src={isDarkMode ? OnlineShoppingDark : OnlineShoppingLight} alt='woman holding a phone aside to shopping webpage'
                 style={{ height: 300, width: 300, padding: 20 }} />
          </AboutCard>
          <AboutCard>
            <H2>Project Team</H2>
            <img src={isDarkMode ? ProjectTeamDark: ProjectTeamLight} alt='man holding scrum histories and woman with laptop'
                 style={{ height: 300, width: 300, padding: 20 }} />
          </AboutCard>
          <AboutCard>
            <H2>Scrum Methodology</H2>
            <img src={isDarkMode ? ScrumDark: ScrumLight} alt='man and woman managing an kanban board'
                 style={{ height: 300, width: 300, padding: 20 }} />
          </AboutCard>
        </AboutCardsContainer>
      </Section>

      {/*----- Projects Section -----*/}
      <Section id='projects'>
        <H1>Buttons</H1>
        <ButtonsContainer>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button primary disabled>Disabled</Button>
          <Button primary outline>Outline</Button>
          <Button secondary outline>Alt Outline</Button>
          <Button primary outline disabled>Disabled</Button>
        </ButtonsContainer>
        <ProjectCard>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis voluptatum.
          Adipisci autem consectetur consequatur cumque dicta eum exercitationem ipsum molestiae
          quasi quibusdam, quisquam reiciendis, soluta suscipit temporibus totam unde!
        </ProjectCard>
      </Section>

      {/*----- Contact Section -----*/}
      <ContactSection id='contact'>
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
      </ContactSection>
    </>
  )
}

export default Home
