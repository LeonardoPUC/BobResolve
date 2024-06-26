import styled from 'styled-components'
import { IContainer } from './Profile.interfaces'

export const Container = styled.div<IContainer>`
  color: ${props => props.color};
  padding: 0 24px 0 16px;
  max-width: 300px;
  @media (max-width: 840px) {
    max-width: 180px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const Name = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Description = styled.div`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`