import styled from 'styled-components'
import { IStyledButton } from './Button.interfaces'

export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.buttonStyle.background};
  color: ${(props) => props.buttonStyle.color};
  border: ${(props) => props.buttonStyle.border};
  border-radius: ${(props) => props.noBorderRadius ? '0px' : '4px'};
  padding: 4px 8px;
  height: 28px;
  &:hover {
      opacity: 0.8;
  }
  @media (max-width: 1200px) { 
    font-size: 16px;
  }
  @media (max-width: 768px) { 
    width: 100%;
  }
  svg {
    margin: 0 4px;
    width: 16px;
    height: 16px;
  }
  span {
    margin: 0 4px;
    white-space: nowrap;
  }
`
