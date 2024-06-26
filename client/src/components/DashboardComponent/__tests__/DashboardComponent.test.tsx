import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DashboardComponent from './../DashboardComponent'

describe('Dashboard component', () => {
  it('should render dashboard', () => {
    const { getByText } = render(
      <DashboardComponent/>
    )

    expect(getByText('Dashboard')).toBeInTheDocument()
  })

  it('should set date range', () => {
    const { getByText, getAllByText, getByTitle } = render(
      <DashboardComponent/>
    )

    expect(getByText('Dashboard')).toBeInTheDocument()

    const picker = getByText('Selecione um período')
    expect(picker).toBeInTheDocument()
    userEvent.click(picker)

    const date = getAllByText('1')
    expect(date).toBeTruthy()
    userEvent.click(date[0])
    userEvent.click(date[1])

    const button = getByText('OK')
    expect(button).toBeTruthy()
    userEvent.click(button)
    expect(getByTitle('Clear')).toBeTruthy()
  })
})