import styled from 'styled-components'
import { IContainer } from './FlexRow.interfaces'

export const Container = styled.div<IContainer>`
    display: flex;
    flex-direction: row;
    width: ${props => props.inner ? '100%' : 'auto'};
    @media (max-width: 1200px) {
        margin-right: ${props => props.inner ? '16px' : '0px'};
        flex-direction: ${props => props.inner ? 'column' : 'row'};
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin-right: ${props => props.inner ? '0px' : '16px'};
    }
`