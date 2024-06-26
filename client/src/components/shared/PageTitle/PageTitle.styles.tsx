import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    @media(max-width: 768px) {
        flex-direction: column;
        gap: 16px
    }
`

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`

export const RightContainer = styled.div`
    align-self: flex-end;
`

export const Title = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: ${COLORS.PRIMARY};
`

export const BorderLeft = styled.div`
    width: 24px;
    height: 24px;
    border-left: 3px solid ${COLORS.GREY};
`