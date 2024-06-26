import { render } from '@testing-library/react'
import Avatar from '../Avatar'

describe('Avatar component', () => {
  it('should render avatar', () => {
    const { getByTestId } = render(<Avatar/>)

    const image = getByTestId('avatar')
    expect(image).toHaveAttribute('src')
  })
})