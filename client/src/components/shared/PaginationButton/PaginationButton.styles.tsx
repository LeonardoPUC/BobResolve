import styled from 'styled-components'

export const TextPagination = styled.div`
  font-size: 18px;
  margin-right: 16px;
`

export const Container = styled.div`
  margin: 24px 0;
  align-items: center;
  float: right;
  align-self: flex-end;
  display: flex;
  @media(max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
  }
`