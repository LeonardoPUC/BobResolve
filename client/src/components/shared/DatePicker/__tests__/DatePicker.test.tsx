import DatePickerComponent from '../DatePicker'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Date picker component', () => {
  const handleChange = jest.fn()

  it('should render date picker', () => {
    const { getByText } = render (
      <DatePickerComponent handleChange={handleChange} placeholder="date picker test"/>
    )

    expect(getByText('date picker test')).toBeInTheDocument()
  })

  it('should call handleChange on change', () => {
    const { getByText, getAllByText } = render (
      <DatePickerComponent handleChange={handleChange} placeholder="date picker test"/>
    )

    const picker = getByText('date picker test')
    expect(picker).toBeInTheDocument()
    userEvent.click(picker)
    const date = getAllByText('1')
    expect(date).toBeTruthy()
    userEvent.click(date[0])
    const button = getByText('OK')
    expect(button).toBeTruthy()
    userEvent.click(button)
    expect(handleChange).toBeCalled()
  })
})