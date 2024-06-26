import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'

export const Container = styled.div`
  width: 100%;
  margin: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.div`
  font-size: 16px;
  color: ${COLORS.GREY};
  margin-bottom: 8px;
`