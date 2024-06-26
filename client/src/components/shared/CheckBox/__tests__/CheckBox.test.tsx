import CheckBox from '../CheckBox'
import { render } from  '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { COLORS } from '../../../../constants/enum'

describe('CheckBox', () => {
  const setChecked = jest.fn()

  it('should render checkbox', () => {
    const{ getByText } = render(
      <CheckBox label='Importar' labelColor={COLORS.CHARCOAL} id='10' checked={true} color={COLORS.LIGHT_GREY} checkedColor={COLORS.SUCCESS} setChecked={setChecked}/>   
    )

    expect(getByText('Importar')).toBeInTheDocument()
  })

  it('should call setChecked on click', () => {
    const { getByRole } = render(
      <CheckBox label='Importar' labelColor={COLORS.CHARCOAL} id='10' checked={true} color={COLORS.LIGHT_GREY} checkedColor={COLORS.SUCCESS} setChecked={setChecked}/>
    )

    const checkBox = getByRole('checkbox')
    userEvent.click(checkBox)
    expect(setChecked).toBeCalled()
  })
})