import styled from 'styled-components'
import { COLORS } from '../../../constants/enum'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    @media(max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        padding: 0;
        align-self: end;
    }
`

export const Title = styled.span`
    a {
        color: ${COLORS.PRIMARY};
        cursor: pointer;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        svg {
            margin: -3px 10px;
        }
    }
    a:hover {
        color: ${COLORS.SUCCESS};
    }
`