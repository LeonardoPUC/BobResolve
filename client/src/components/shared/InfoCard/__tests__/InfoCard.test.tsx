import { render } from '@testing-library/react'
import InfoCard from '../InfoCard'

describe ('InfoCard component', () => {
  it('should render InfoCard', () => {
    const { getByDisplayValue, getByText } = render(
      <InfoCard defaultValue='text' title='title'/>
    )
      
    expect(getByDisplayValue('text')).toBeInTheDocument()
    expect(getByText('title')).toBeInTheDocument()
  })
})