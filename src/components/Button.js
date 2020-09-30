import styled, { css } from 'styled-components'

const Button = styled.button`
  min-width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: ${({theme}) => theme.onPrimary};
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

export default Button
