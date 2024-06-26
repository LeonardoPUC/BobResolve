import Button from '../SubmitButton'
import { render } from  '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BUTTON_TYPE, COLORS } from '../../../../constants/enum'

describe('Button Component', () => {
  const onClick = jest.fn()

  it('should render button', () => {
    const { getByText } = render(
      <Button buttonType={BUTTON_TYPE.SUCCESS} text='button title' onClick={ onClick }/>
    )

    expect(getByText('button title')).toBeInTheDocument()
  })

  it('should render success button', () => {
    const { getByRole } = render(
      <Button buttonType={BUTTON_TYPE.SUCCESS} text='button title' onClick={ onClick }/>
    )

    expect(getComputedStyle(getByRole('button')).border).toBe('')
    expect(getComputedStyle(getByRole('button')).color).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(getByRole('button')).background).toBe('rgb(7, 167, 7)')
  })
  
  it('should render disabled button', () => {
    const { getByRole } = render(
      <Button buttonType={BUTTON_TYPE.DISABLED} text='button title' onClick={ onClick }/>
    )

    expect(getComputedStyle(getByRole('button')).border).toBe('1px solid #6c757d')
    expect(getComputedStyle(getByRole('button')).color).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(getByRole('button')).background).toBe('rgb(108, 117, 125)')
  })

  it('should render primary button', () => {
    const { getByRole } = render(
      <Button buttonType={BUTTON_TYPE.PRIMARY} text='button title' onClick={ onClick }/>
    )

    expect(getComputedStyle(getByRole('button')).border).toBe('')
    expect(getComputedStyle(getByRole('button')).color).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(getByRole('button')).background).toBe('rgb(0, 26, 122)')
  })
  
  it('should render white button', () => {
    const { getByRole } = render(
      <Button buttonType={BUTTON_TYPE.WHITE} text='button title' onClick={ onClick }/>
    )

    expect(getComputedStyle(getByRole('button')).border).toBe('')
    expect(getComputedStyle(getByRole('button')).color).toBe('rgb(0, 26, 122)')
    expect(getComputedStyle(getByRole('button')).background).toBe('rgb(255, 255, 255)')
  })

  it('should render blue border button', () => {
    const { getByRole } = render(
      <Button buttonType={BUTTON_TYPE.BORDER_BLUE} text='button title' onClick={ onClick }/>
    )

    expect(getComputedStyle(getByRole('button')).border).toBe('1px solid #001a7a')
    expect(getComputedStyle(getByRole('button')).color).toBe('rgb(0, 26, 122)')
    expect(getComputedStyle(getByRole('button')).background).toBe('rgb(255, 255, 255)')
  })

  it('should call onClick', () => {
    const {getByRole} = render (
      <Button buttonType='' onClick={onClick}/>
    )

    const button = getByRole('button')
    userEvent.click(button)
    expect(onClick).toBeCalled 
  })
})