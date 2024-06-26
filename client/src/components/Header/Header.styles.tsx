import styled from 'styled-components'
import { COLORS } from './../../constants/enum'

export const Container = styled.div`
  height: 64px;
  display: flex;
  background-color: ${COLORS.OFF_WHITE}; 
  box-shadow: 0 0 32px 0 gray;
  padding-left: 16px;
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 24px;
  }
`