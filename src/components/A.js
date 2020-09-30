import styled from 'styled-components'

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

export default A
