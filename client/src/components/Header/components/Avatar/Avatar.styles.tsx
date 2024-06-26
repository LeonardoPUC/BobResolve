import styled from 'styled-components'
import { COLORS } from '../../../../constants/enum'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    width: 40px;
    height: 40px;
`

export const AvatarInner = styled.img`
    z-index: 2;
    width: 40px;
    height: 40px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
`

export const AvatarBorder = styled.div`
    position: absolute;
    border-radius: 50%;
    background: ${COLORS.LIGHT_BLUE};
    background-size: contain;
    width: 48px;
    height: 48px;
`

export const AvatarInnerBorder = styled.div`
    position: absolute;
    top: 2px;
    left: 2px;
    background: ${COLORS.WHITE};
    border-radius: 50%;
    width: 44px;
    height: 44px;
`