import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'
import { IGreyBackground } from './GreyBackground.interfaces'

export const GreyBackgroundContainer = styled.div<IGreyBackground>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.GREY_BACKGROUND};
  z-index: 6;
  display: ${props => props.open ? 'block' : 'none'};
  cursor: unset;
`