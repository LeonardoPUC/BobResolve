import styled from 'styled-components'

interface IContainer {
    open: boolean,
    powerStation: boolean
}

export const Container = styled.div<IContainer>`
    width: 100%;
    padding: 16px; 
    padding-bottom: 80px;
    overflow: auto;
    height: 100%;
    @media(max-width: 768px){
        height: ${props => props.open ? 'calc(100vh - 60px)' : '100%'};
    }
`

export const FlexContainer = styled.div`
    display: flex;
    position: relative;
    height: 100%;
`