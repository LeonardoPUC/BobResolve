import { render } from '@testing-library/react'
import Links from './../Links'
import userEvent from '@testing-library/user-event'

describe('Links component', () => {  
  const onClick = jest.fn()
  
  it('should render page title', () => {
    const { getByText } = render(
      <Links text='Nome do projeto lorem' onClick={onClick}/>
    )

    expect(getByText('Nome do projeto lorem')).toBeTruthy()
  })

  it('should call onClick', () => {
    const {getByText} = render (
      <Links text='Nome do projeto lorem' onClick={onClick}/>
    )

    const link = getByText('Nome do projeto lorem')
    userEvent.click(link)
    expect(onClick).toBeCalled 
  })
})