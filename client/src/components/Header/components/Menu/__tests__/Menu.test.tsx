import { render } from '@testing-library/react'
import Menu from '../Menu'
import { queryClient } from '../../../../../services/queryClient'
import { QueryClientProvider } from 'react-query'
import userEvent from '@testing-library/user-event'
import { ICONS_TYPE } from '../../../../../constants/enum'
import { useQuery } from '../../../../../services/useQuery'

jest.mock('../../../../../services/useQuery', () => (
  {
    useQuery: jest.fn(),
  }
))

describe('Menu component', () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockImplementation(() => {
      return ({
        refetch: jest.fn(),
        data: {
          data:
          [
            {
              id: 1,
              name: 'Dashboard',
              icon: ICONS_TYPE.GRAPH_UP_ARROW,
              subMenu: [
                {
                  id: 1,
                  name: 'User',
                  icon: ICONS_TYPE.GRAPH_UP_ARROW,
                  subMenu: [],
                  url: ''
                }
              ],
              url: ''
            },
            {
              id: 2,
              name: 'Integrador',
              icon: ICONS_TYPE.DEFAULT_ICON,
              subMenu: [],
              url: ''
            }
          ]
        }
      })
    })
  })

  const handleOpen = jest.fn()

  it('should render menu items', async () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>    
        <Menu open={true} handleMenuOpen={jest.fn()}/>
      </QueryClientProvider>
    )
    
    expect(getByText('Dashboard')).toBeInTheDocument()
    expect(getByText('Integrador')).toBeInTheDocument()
  })

  it('should open menu', () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>    
        <Menu open={false} handleMenuOpen={handleOpen}/>
      </QueryClientProvider>
    )

    const openButton = getByTestId('open-menu')
    userEvent.click(openButton)
    expect(handleOpen).toBeCalled()
  })

  it('should open submenu', () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>    
        <Menu open={true} handleMenuOpen={handleOpen}/>
      </QueryClientProvider>
    )

    const menu = getByText('Dashboard')
    expect(menu).toBeInTheDocument()
    userEvent.click(menu)
    expect(getByText('User')).toBeInTheDocument()
  })
})