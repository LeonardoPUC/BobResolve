import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'
import { IStyledStatusCard } from './StatusCard.interfaces'

export const Container = styled.div<IStyledStatusCard>`
    margin: 8px;
    background-color: ${COLORS.WHITE};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${(props) => props.statusCardStyle.border};
    border-left: ${(props) => props.statusCardStyle.borderLeft};
    padding: 16px;
    border-radius: 4px;
    svg {
        fill: ${(props) => props.statusCardStyle.iconColor};
        background-color: ${(props) => props.statusCardStyle.iconBackground};
        width: 56px;
        height: 56px;
        padding: 8px;
        border-radius: ${(props) => props.statusCardStyle.borderRadius};
    }
    overflow: ${(props) => props.statusCardStyle.overflow};
    text-overflow: ${(props) => props.statusCardStyle.textOverflow};
    cursor: ${(props) => props.statusCardStyle.cursor};
    &:hover {
        opacity: ${(props) => props.statusCardStyle.opacity};
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