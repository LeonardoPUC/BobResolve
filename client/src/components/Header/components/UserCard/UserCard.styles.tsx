import styled from 'styled-components'
import { COLORS } from '../../../../constants/enum'
import InfoIcon from '@mui/icons-material/Info'

export const Container = styled.div`
  top: 60px;
  right: 80px;
  list-style: none;
  position: absolute;
  text-align: left;
  width: 372px;
  max-height: 280px;
  border-radius: 4px;
  align-items: flex-end;
  border: 1px solid ${COLORS.LIGHT_GREY};
  background-color: ${COLORS.WHITE};
  padding: 16px;
`

export const SubContainer = styled.div` 
  list-style: none;
  flex-direction: column;
  hr {
    margin: 16px 0;
    color: ${COLORS.GHOST_WHITE};
  }
`

export const User = styled.div`
  display: flex;
`

export const UserItems = styled.div`
  div {
    margin-bottom: 16px;
  }
  a { 
    color: ${COLORS.DARK_GREY};
    margin-left: 12px;
    align-self: center;
  }
  a:hover {
    cursor: pointer;
  }
`

export const TrialPeriodDate = styled.div`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:start;
`

export const CardPeriodDate = styled.span`
  display: flex;
  padding: 0px 8px 0px 8px;
  background: #07a707;
  border-radius: 3px;
  margin-top: 8px;
  align-items: center;
  color:#ffff;
  width:100%;
`

export const ColoredInfoIcon = styled(InfoIcon)`
  color: #ffff; 
  background: #07a707;
  border-color: #ffff;
`