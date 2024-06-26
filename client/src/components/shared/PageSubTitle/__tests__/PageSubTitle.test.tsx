import { render } from '@testing-library/react'
import PageSubTitle from '../PageSubTitle'

describe('PageSubTitle component', () => {

  it('should render page title', () => {
    const { getByText } = render(
      <PageSubTitle subTitle='Dashboard'/>
    )

    expect(getByText('Dashboard')).toBeTruthy()
  })
})