import { render } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../../../../../services/queryClient'
import UserCard from '../UserCard'
import userEvent from '@testing-library/user-event'

describe('User card component', () => {
  it('should render user card', () => {
    const {getAllByRole, getByText} = render(
      <QueryClientProvider client={queryClient}>
        <UserCard/>
      </QueryClientProvider> 
    )

    const avatar = getAllByRole('img')
    expect(avatar).toBeTruthy() 
    expect(getByText('Meu perfil')).toBeInTheDocument()
    expect(getByText('Sair')).toBeInTheDocument()
  })

  it('should logout on user card logout click', () => {
    global.window = Object.create(window)
    
    Object.defineProperty(window, 'location', {
      value: {
        href: '/home',
      }
    })

    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <UserCard/>
      </QueryClientProvider> 
    )

    const logoutButton = getByText('Sair')
    expect(logoutButton).toBeInTheDocument()
    userEvent.click(logoutButton)
    expect(window.location.href).toBe('http://localhost:3000/')
  })
})