import styled from 'styled-components'
import { IContainer } from './Menu.interfaces'
import { COLORS } from './../../../../constants/enum'

export const Container = styled.div<IContainer>`
  background-color: ${COLORS.DARK_BLUE};
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh;
  left: 0;
  z-index: 3;
  min-width: ${(props) => (props.open ? '360px' : '0px')};
  color: ${COLORS.WHITE};
  transition: width ease-in 0.5s;
  overflow-y: scroll;
  -ms-overflow-style: none;  
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  > svg {
    pointer-events: all;
    cursor: pointer;
    display: block;
    margin-top: 16px;
    margin-left: 16px;
    color: ${COLORS.WHITE};
    width: 32px;
    height: 32px;
  }
  @media (max-width: 990px) {
    z-index: 7;
    padding-top: 48px;
    width: ${(props) => (props.open ? '360px' : '0px')};
    position: fixed;
    left: auto;
    right: 0;
    transition: width ease-in 0.2s;
    > svg {
    display: none;
    }
  }
  @media (max-width: 360px) {
    width: ${(props) => (props.open ? '100%' : '0px')};
  }
`

export const OverflowX = styled.div<IContainer>`
  display: none;
  @media (max-width: 990px){
    display: block;
    svg {
      z-index: 8;
      width: 32px;
      height: 32px;
      cursor: pointer;
      margin-top: 16px;
      margin-left: 16px;
      color: ${(props) => (props.open ? COLORS.WHITE : COLORS.PRIMARY)};
      position: absolute;
      top: -64px;
      right: 16px;
    }
  }
`

export const Content = styled.div`
  margin-bottom: 32px;
  margin-top: 16px;
`

export const HeaderMenuContainer = styled.div `
  display: none;
  @media (max-width: 990px) {
    display: block;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${COLORS.PRIMARY};
    border-bottom: 1px solid ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};
  }
`

export const LogoutContainer = styled.div `
  display: none;
  @media (max-width: 990px) {
    display: block;
    padding-top: 16px;
  }
`

export const UserContainer = styled.a`
  display: flex;
  padding: 0px 16px 16px 16px;
`