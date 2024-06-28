import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'

export const SearchContainer = styled.div`
  display: flex;  
  @media (max-width: 1200px) {
    width: 100%;
  }
  input{
    width: 100%;
    padding-left: 10px;
    height: 40px;
    border: 1px solid ${COLORS.LIGHT_GREY};
    border-radius: 4px 0px 0px 4px;
    color: ${COLORS.GREY}
  }
`

export const Button = styled.button`
  color: ${COLORS.BRAND_GREY};
  border: 1px solid ${COLORS.LIGHT_GREY};
  border-radius: 0px 4px 4px 0px;
  padding: 8px 10px;
`