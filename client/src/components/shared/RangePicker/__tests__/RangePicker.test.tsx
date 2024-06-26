import RangePicker from '../RangePicker'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Range picker component', () => {
  const handleChange = jest.fn()

  it('should render range picker', () => {
    const { getByText } = render (
      <RangePicker handleChange={handleChange} placeholder="range picker test"/>
    )

    expect(getByText('range picker test')).toBeInTheDocument()
  })

  it('should call handleChange on change', () => {
    const { getByText, getAllByText } = render (
      <RangePicker handleChange={handleChange} placeholder="range picker test"/>
    )

    const picker = getByText('range picker test')
    expect(picker).toBeInTheDocument()
    userEvent.click(picker)
    const date = getAllByText('1')
    expect(date).toBeTruthy()
    userEvent.click(date[0])
    userEvent.click(date[1])
    const button = getByText('OK')
    expect(button).toBeTruthy()
    userEvent.click(button)
    expect(handleChange).toBeCalled()
  })
})