import React from 'react'
import styled, { css } from 'styled-components'


const SwitchContainer = styled.label`
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


function Switch({ checked, onChange }) {
  return (
    <SwitchContainer>
      <SliderInput type='checkbox' checked={checked} onChange={onChange} />
      <Slider round />
    </SwitchContainer>
  )
}

export default Switch
