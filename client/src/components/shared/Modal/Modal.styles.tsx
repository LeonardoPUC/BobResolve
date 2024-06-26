import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'

export const Container = styled.div`
    background-color: ${COLORS.OFF_WHITE};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 8;
    width: 700px;
    position: fixed; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%,-50%); 
    border-radius: 8px;
    box-shadow: 2px 2px 16px ${COLORS.GREY};
    border: 1px solid ${COLORS.LIGHT_GREY};
    font-size: 20px;
    hr {
        border: 1px solid ${COLORS.LIGHT_GREY};
        margin: 0;
    }
    @media (max-width: 1200px) {
        width: 500px;
    }
    @media (max-width: 768px) {
        width:92%; 
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    span {
        align-self: center;
        font-weight: 500;
        color: ${COLORS.CHARCOAL}
    }
    svg {
        opacity: 0.5;
        width: 28px;
        height: 28px;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
`

export const Body = styled.div`
    padding: 16px;
    display: flex;
`

export const Footer = styled.div`
    padding: 16px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    @media (max-width: 320px) {
        flex-direction: column;
    }
`