import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PaginationButton from '../PaginationButton'

describe('PaginationButton component', () => {
  const handlePage = jest.fn()

  it('should render PaginationButton', () => {
    const { getByText } = render(
      <PaginationButton totalPages={452} totalRecords={7218} handleChangePagination={handlePage} currentPage={4}/>
    )
  
    expect(getByText('452')).toBeInTheDocument()
    expect(getByText('Total 7218 itens')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
  })   

  it('should call handleChangePagination on Click' , () => {
    const { getByText } = render(
      <PaginationButton totalPages={452} totalRecords={7218} handleChangePagination={handlePage} currentPage={4}/>
    )
  
    const buttonPagination = getByText('4')
    userEvent.click(buttonPagination)
    expect(handlePage).toBeCalled()
  })
})