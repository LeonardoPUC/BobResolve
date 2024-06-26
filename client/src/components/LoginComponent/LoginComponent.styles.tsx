import styled from 'styled-components'
import leftBackground from '../../assets/login/login-left-background.webp'
import { COLORS } from '../../constants/enum'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #313e37;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const InnerContainer = styled.div`
  background-color: ${COLORS.WHITE_SMOKE};
  position: fixed; 
  left: 50%; 
  top: 50%; 
  transform: translate(-50%,-50%);
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LeftContainer = styled.div`
  background-image: url(${leftBackground});
  height: 100%;
  width: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media(max-width: 768px){
    display: none
  }
`

export const RightContainer = styled.div`
  padding: 32px;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  input[type=submit] {
    width: 320px;
    background-color: ${COLORS.SUCCESS};
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    @media(max-width: 768px){
      width: 100%;
    }
  }
  input[type=submit]:hover {
    opacity: 0.8;
  }
  input {
    width: 320px;
    background-color: ${COLORS.WHITE};
    padding: 8px 16px;
    border: 1px solid ${COLORS.SLATE};
    border-radius: 4px;
    cursor: pointer;
    @media(max-width: 768px){
      width: 100%;
    }
  }
  span {
    font-size: 32px;
    font-weight: 500;
  }
  @media(max-width: 768px){
    width: 100%
  }
`

export const LoadingContainer = styled.div`
  padding: 16px;
`