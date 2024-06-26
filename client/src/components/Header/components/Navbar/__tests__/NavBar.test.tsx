import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../../../../../services/queryClient'
import { useQuery } from '../../../../../services/useQuery'
import NavBar from '../Navbar'

jest.mock('../../../../../services/useQuery', () => (
  {
    useQuery: jest.fn(),
  }
))

describe('NavBar component', () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockImplementation((params) => {
      if(params.id === 'get-user'){
        return ({
          refetch: jest.fn(),
          data: {
            data: {
              id: 1,
              name: 'Leonardo',
              email: 'leonardo@genyx.com.br'
            }
          }
        })
      }
      return ({
        refetch: jest.fn(),
        data: {
          data: [
            {
              description: 'exibição da notificação',
              read: false,
              date: '2022-09-06T18:09:46.9616924'
            }
          ]
        }
      })
    })
  })
  
  it('should render button', () => {
    const {getAllByText} = render(
      <QueryClientProvider client={queryClient}>
        <NavBar/>
      </QueryClientProvider> 
    )

    expect(getAllByText('Plataforma')).toBeTruthy() 
  })

  it('should redirect window location platform', () => {
    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <NavBar/>
      </QueryClientProvider> 
    )

    global.window = Object.create(window)
    
    Object.defineProperty(window, 'location', {
      value: {
        href: '/',
      }
    })

    const plataforma = getByText('Plataforma')
    userEvent.click(plataforma)
    expect(window.location.href).toBe('https://plataforma.genyx.com.br/')
  })

  it('should render avatar and user card', () => {
    const {getByTestId, getByText} = render(
      <QueryClientProvider client={queryClient}>
        <NavBar/>
      </QueryClientProvider> 
    )
    
    const avatar = getByTestId('avatar')
    expect(avatar).toBeInTheDocument() 
    userEvent.hover(avatar)
    const loadUserCard = getByText('Meu perfil')
    expect(loadUserCard).toBeInTheDocument() 
    userEvent.unhover(loadUserCard)
    expect(loadUserCard).not.toBeInTheDocument()
  })

  it('should render icon and note card', () => {
    const {getByTestId, getByText} = render(
      <QueryClientProvider client={queryClient}>
        <NavBar/>
      </QueryClientProvider> 
    )

    const iconNote = getByTestId('note-icon')
    expect(getByTestId('note-icon')).toBeInTheDocument()
    userEvent.hover(iconNote)
    const loadUserCard = getByText('exibição da notificação')
    expect(loadUserCard).toBeInTheDocument() 
    userEvent.unhover(loadUserCard)
    expect(loadUserCard).not.toBeInTheDocument()
  })
})