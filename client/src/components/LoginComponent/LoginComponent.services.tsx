import { api } from '../../services/useQuery'
import { ICredential } from './LoginComponent.interfaces'

export async function login(credentials: ICredential) {
  const response = await api.post(`${process.env.REACT_APP_BOB_API}/login`,
    {
      email: credentials.email,
      senha: credentials.password
    }, {
      headers: {
        token: process.env.REACT_APP_BOB_TOKEN as string,
      }
    }
  )
  return response.data
}

export async function recoveryPassword(email: string) {
  const response = await api.post(`${process.env.REACT_APP_BOB_API}/recuperarsenha`, email, {
    headers: {
      authorization: process.env.REACT_APP_BOB_TOKEN as string,
    }
  })

  return response.data.data
}