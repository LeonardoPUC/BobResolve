import styled from 'styled-components'
import { COLORS } from '../../../../constants/enum'

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 990px) {
    display: none;
  }
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  height: 100%;
  width: 100%;
  margin-right: 24px;
  z-index: 6;
`

export const List = styled.div`
  height: 100%;
  display: flex;  
  align-items: center;
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  Button {
    margin-right: 8px;
  }
`

export const VerticalLine = styled.div `
  height: 40px;
  border-right: 1px solid ${COLORS.SLATE};
  margin: 0 16px;
`

export const CardNoteContainer = styled.div`
  width: 32px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg:hover {
    cursor: pointer
  }
`

export const UserCardContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`