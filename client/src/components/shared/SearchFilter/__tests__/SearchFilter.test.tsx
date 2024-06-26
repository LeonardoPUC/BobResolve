import SearchFilter from '../SearchFilter'
import { fireEvent, render } from  '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Search Filter Component', () => {
  const handleChange = jest.fn()
  
  it('should render search filter', () => {
    const {getByPlaceholderText} = render( 
      <SearchFilter onSearch={() => ''}/> 
    )    

    expect(getByPlaceholderText('Filtrar nome')).toBeInTheDocument()
  })  

  it('should render update on change', () => {
    const {getByTestId} = render( 
      <SearchFilter onSearch={handleChange}/> 
    )

    const inputSearch = getByTestId('search')  
    expect(inputSearch).toBeTruthy()  
    userEvent.type(inputSearch, 'adilson')
    userEvent.click(inputSearch)
    expect(getByTestId('search')).toHaveValue('adilson')
  })  

  it('should call searchFilter on enter press', () => {
    const { getByTestId } = render(
      <SearchFilter onSearch={handleChange}/>
    )

    const inputSearch = getByTestId('search')
    userEvent.type(inputSearch, 'adilson')
    fireEvent.keyPress(inputSearch, { key: 'Enter', keyCode: 13 })
    expect(handleChange).toBeCalled()
    expect(getByTestId('search')).toHaveValue('adilson')
  })  

  it('should call searchFilter on numpad enter press', () => {
    const { getByTestId } = render(
      <SearchFilter onSearch={handleChange}/>
    )

    const inputSearch = getByTestId('search')
    userEvent.type(inputSearch, 'adilson')
    fireEvent.keyPress(inputSearch, { key: 'NumpadEnter', keyCode: 13 })
    expect(handleChange).toBeCalled()
    expect(getByTestId('search')).toHaveValue('adilson')
  }) 
})