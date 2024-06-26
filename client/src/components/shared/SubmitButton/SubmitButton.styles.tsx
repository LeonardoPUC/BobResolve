import styled from 'styled-components'
import { IStyledSubmitButton } from './SubmitButton.interfaces'

export const StyledButton = styled.button<IStyledSubmitButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.buttonStyle.background};
  color: ${(props) => props.buttonStyle.color};
  border: ${(props) => props.buttonStyle.border};
  border-radius: ${(props) => props.noBorderRadius ? '0px' : '4px'};
  padding: 8px;
  height: 40px;
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
  }
  span {
    margin: 0 4px;
    white-space: nowrap;
  }
`