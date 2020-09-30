import styled from 'styled-components'

const IconButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primaryColor};
  :hover {
    color: ${({ theme }) => theme.onBackground};    
  }
`

export default IconButton
