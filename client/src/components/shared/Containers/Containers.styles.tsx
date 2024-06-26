import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'

export const Container = styled.div`
  @media (min-width: 768px) {
      padding: 16px 16px 100px 16px;
      margin: 8px;
      background-color: ${COLORS.WHITE_SMOKE};
  }
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 8px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const RightSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LeftSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ColumnContainer = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
  border-radius: 4px;
  max-height: 235px;
  @media (max-width: 768px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    width: 65%;
  }
`

export const MobilePagination = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`