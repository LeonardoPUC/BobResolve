import styled from 'styled-components'
import { IContainer } from './MenuItem.interfaces'
import { COLORS } from './../../../../constants/enum'

export const SubMenuContainer = styled.div<IContainer>`
  margin-left: 18px;
  display: ${(props) => (props.open ? 'block' : 'none')};
`

export const Container = styled.div`
  justify-content: space-between;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${COLORS.WHITE};
  margin: 0 8px 10px 18px;
  text-decoration: none;
  user-select: none;
  svg {
    fill: ${COLORS.WHITE};
    color: ${COLORS.WHITE};
    width: 24px;
    height: 24px;
    margin-right: 16px;
    pointer-events: all;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.5;
  }
`

export const MenuTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`