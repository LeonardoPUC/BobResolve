import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginComponent from '../LoginComponent'
import { login } from '../LoginComponent.services'

jest.mock('../LoginComponent.services', () => (
  {
    login: jest.fn(),
  }
))

describe('Login component', () => {
  beforeEach(() => {
    (login as jest.Mock).mockImplementation(() => {
      return ({
        data: {
          dado: {
            accessKey: '', 
            userId: 1, 
            integratorId: 2
          }
        }
      })
    })
  })

  it('should render login', () => {
    const { getByText } = render(
      <LoginComponent/>
    )

    expect(getByText('Bem vindo!')).toBeInTheDocument()
  })

  it('should handle email input', () => {
    const { getByPlaceholderText } = render(
      <LoginComponent/>
    )

    const emailInput = getByPlaceholderText('exemplo@gmail.com')
    expect(emailInput).toBeInTheDocument()
    userEvent.type(emailInput, 'adilsonsolar@gmail.com')
    expect(emailInput).toHaveValue('adilsonsolar@gmail.com')
  })

  it('should handle password input', () => {
    const { getByPlaceholderText } = render(
      <LoginComponent/>
    )

    const passwordInput = getByPlaceholderText('senha')
    expect(passwordInput).toBeInTheDocument()
    userEvent.type(passwordInput, '123456')
    expect(passwordInput).toHaveValue('123456')
  })

  it('should handle authentication', async () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginComponent/>
    )

    userEvent.type(getByPlaceholderText('exemplo@gmail.com'), 'adilsonsolar@gmail.com')
    userEvent.type(getByPlaceholderText('senha'), '123456')
    const button = getByText('Entrar')
    expect(button).toBeInTheDocument()
    userEvent.click(button)
    await waitFor(() => expect(login as jest.Mock).toBeCalledWith(
      {
        email: 'adilsonsolar@gmail.com', password: '123456'
      }
    ))
  })
})