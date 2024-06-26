/* eslint-disable */
import {
  Container,
  InnerContainer,
  LeftContainer,
  LoadingContainer,
  RightContainer,
} from './LoginComponent.styles'
import logo from '../../assets/login/boblogo.png'
import { ChangeEvent, useState } from 'react'
import { ICredential } from './LoginComponent.interfaces'
import { login, recoveryPassword } from './LoginComponent.services'
import useAccessKeyStore from './../../stores/accessKey'
import Loading from '../shared/Loading/Loading'
import React from 'react'
import axios from 'axios';

const LoginComponent = () => {
  const addKey = useAccessKeyStore((state) => state.addCredentials)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [emailForgot, setEmailForgot] = useState('')
  const [messageSucess, setMessageSucess] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = React.useState(false);

  const [credential, setCredential] = useState<ICredential>({
    email: '',
    password: '',
  })

  const handleEmailForgot = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailForgot(event.target.value)
  }

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setCredential({
      ...credential,
      email: event.target.value,
    })
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCredential({
      ...credential,
      password: event.target.value,
    })
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      authenticate()
    }
  }

  const onKeyDownRecPass = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      newPassword()
    }
  }

  const newPassword = async () => {
    const response = await recoveryPassword(emailForgot)
    setMessageSucess(true)
  }

  const authenticate = async () => {
    setLoading((prevLoading) => !prevLoading);
    await login(credential).then((response) => {
      addKey({ accessKey: response?.token, userId: response?.userId })
      window.location.href = "/dashboard"
    }).catch(err => {
      setLoading((prevLoading) => !prevLoading);
      if (err && err.response) {
        if (err.response.status === 401) {
          const errorMessage = err.response.data?.erros[0];
          setShowAlert(true);
          setAlertMessage(errorMessage);
        }
      }
    })
  }

  const forgotPassword = async () => {
    setShowForgotPassword(true)
  }

  const back = async () => {
    setShowForgotPassword(false)
  }

  const renderForgotPassword = () => {
    return (
      <>
        <span>Recuperar a Senha</span>
        <input
          id="emailForgot"
          type="text"
          placeholder="exemplo@gmail.com"
          value={emailForgot}
          onChange={(e) => handleEmailForgot(e)}
          onKeyDown={(e) => onKeyDownRecPass(e)}
        />
        {
          !messageSucess ?
            <input type="submit" value="Enviar" onClick={newPassword} /> : null
        }
        {
          messageSucess ?
            <div>A nova senha foi enviada para o email digitado!</div> : null
        }
        {
          messageSucess ?
            <input type="button" value="Voltar" onClick={back} /> : null
        }
      </>
    )
  }

  return (
    <Container>
      {loading && <LoadingContainer><Loading /></LoadingContainer>}
      <InnerContainer>
        <LeftContainer />
        <RightContainer>
          <img src={logo} />
          {!showForgotPassword ?
            <>
              <span>Bem vindo!</span>
              <input
                id="email"
                type="text"
                placeholder="exemplo@gmail.com"
                value={credential.email}
                onChange={(e) => handleEmail(e)}
                onKeyDown={(e) => onKeyDown(e)}
                disabled={loading}
              />
              <input
                id="password"
                type="password"
                placeholder="senha"
                value={credential.password}
                onChange={(e) => handlePassword(e)}
                onKeyDown={(e) => onKeyDown(e)}
                disabled={loading}
              />
              {
                showAlert ?
                  <div style={{ color: 'red' }}>{alertMessage}</div> : null
              }

              <input type="submit" value="Entrar" onClick={authenticate} disabled={loading}/>
              <a href='#' onClick={forgotPassword} aria-disabled={loading}>Esqueceu a senha?</a>
              <a href='#' aria-disabled={loading}>Não tem cadastro? Cadastrar</a> </> :
              renderForgotPassword()
          }
        </RightContainer>
      </InnerContainer>
    </Container>
  )
}

export default LoginComponent