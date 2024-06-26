import { render } from '@testing-library/react'
import PageTitle from './../PageTitle'

describe('PageTitle component', () => {
  it('should render page title', () => {
    const { getByText } = render(
      <PageTitle title='Dashboard' children='body'/>
    )

    expect(getByText('Dashboard')).toBeTruthy()
    expect(getByText('body')).toBeTruthy()
  })
})