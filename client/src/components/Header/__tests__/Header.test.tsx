import { render } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from '../../../services/queryClient'
import Header from '../Header'

describe('Header component', () => {
  it('should render header', () => {
    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </QueryClientProvider> 
    )

    expect(getByText('Plataforma')).toBeInTheDocument()
  })
})