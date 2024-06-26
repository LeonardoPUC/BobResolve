import { render } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { COLORS } from '../../../../../constants/enum'
import { queryClient } from '../../../../../services/queryClient'
import Profile from '../Profile'

jest.mock('../../../../../services/useQuery', () => {
  return {
    useQuery: () => (
      {
        refetch: jest.fn(),
        data: {
          data: {
            id: 1,
            name: 'Leonardo',
            email: 'leonardo@genyx.com.br'
          }
        }
      }
    ),
  }
})

describe ('Profile component', () => {
  it('should render Profile', () => {
    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <Profile color={COLORS.BLACK}/>
      </QueryClientProvider> 
    )

    expect(getByText('Leonardo')).toBeInTheDocument()
    expect(getByText('leonardo@genyx.com.br')).toBeInTheDocument()
  })
})