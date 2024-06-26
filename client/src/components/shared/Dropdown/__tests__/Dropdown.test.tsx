import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dropdown from '../Dropdown'

describe('Dropdown component', () => {
  const handleChange = jest.fn()

  it('should render dropdown', async () => {
    const { getAllByText } = render(
      <Dropdown label='dropdown' items={[]} filterValue='' handleChange={handleChange} width='100px'/>
    )

    expect(getAllByText('dropdown')).toBeTruthy()
  })

  it('should open dropdown', async () => {
    const { getByRole, getByText } = render(
      <Dropdown label='dropdown' items={['item1', 'item2']} filterValue='' handleChange={handleChange} width='100px'/>
    )

    const dropdownComponent = getByRole('button')
    userEvent.click(dropdownComponent)
    expect(getByText('item1')).toBeInTheDocument()
    expect(getByText('item2')).toBeInTheDocument()
  })

  it('should change dropdown', async () => {
    const { getByRole, getByText } = render(
      <Dropdown label='dropdown' items={['item1', 'item2']} filterValue='' handleChange={handleChange} width='100px'/>
    )

    const dropdownComponent = getByRole('button')
    userEvent.click(dropdownComponent)
    const dropdownItem = getByText('item1')
    expect(dropdownItem).toBeInTheDocument()
    userEvent.click(dropdownItem)
    expect(handleChange).toBeCalled()
  })
})