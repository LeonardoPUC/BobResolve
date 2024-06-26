import { render } from '@testing-library/react'
import FlexRow from './../FlexRow'

describe('FlexRow component', () => {
  it('should render page title', () => {
    const { getByText } = render(
      <FlexRow>Row</FlexRow>
    )

    expect(getByText('Row')).toBeTruthy()
  })
})