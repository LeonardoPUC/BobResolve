import { render } from '@testing-library/react'
import { COLORS } from '../../../../constants/enum'
import GreyBackground from './../GreyBackground'

describe('GreyBackground component', () => {
  it('should render grey brackground', () => {
    const { getByTestId } = render(
      <GreyBackground open={true}/>
    )
    
    expect(getByTestId('grey-background')).toBeInTheDocument()
    expect(getByTestId('grey-background')).toHaveStyle(`background-color: ${COLORS.GREY_BACKGROUND}`)
  })
})