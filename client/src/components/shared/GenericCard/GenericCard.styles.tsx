import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'
import { IStyledGenericCard } from './GenericCard.interfaces'

export const Container = styled.div<IStyledGenericCard>`
    margin: 8px;
    background-color: ${COLORS.WHITE};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${(props) => props.genericCardStyle.border};
    border-left: ${(props) => props.genericCardStyle.borderLeft};
    padding: 16px;
    border-radius: 4px;
    svg {
        fill: ${(props) => props.genericCardStyle.iconColor};
        background-color: ${(props) => props.genericCardStyle.iconBackground};
        width: 56px;
        height: 56px;
        padding: 8px;
        border-radius: ${(props) => props.genericCardStyle.borderRadius};
    }
`

export const TextContainer = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    color: ${COLORS.GREY};
    font-size: 15px;
    height: 90%;
    width: 100%;
    justify-content: space-between;
    span {
        color: ${COLORS.DARK_GREY};
        font-size: 32px;
        font-weight: 600;
        @media (max-width: 768px) {
            font-size: 28px;
        }
    }
`