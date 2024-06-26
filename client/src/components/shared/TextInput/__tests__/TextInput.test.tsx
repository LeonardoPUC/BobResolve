import { render } from '@testing-library/react'
import TextInput from '../TextInput'

describe ('TextInput component', () => {
  it('should render TextInput', () => {
    const { getByDisplayValue } = render(
      <TextInput defaultValue="text"/>
    )
      
    expect(getByDisplayValue('text')).toBeInTheDocument()
  })
})