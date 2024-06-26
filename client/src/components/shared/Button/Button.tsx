import { BUTTON_TYPE, COLORS } from '../../../constants/enum'
import { IButton, IButtonStyle } from './Button.interfaces'
import { StyledButton } from './Button.styles'

const Button = (buttonProps: IButton) => {
  let buttonStyle: IButtonStyle = {
    background: COLORS.PRIMARY,
    color: COLORS.WHITE,
    border: 'none',
  }

  switch (buttonProps.buttonType) {
  case BUTTON_TYPE.SUCCESS:
    buttonStyle = {
      background: COLORS.SUCCESS,
      color: COLORS.WHITE,
      border: 'none',
    }
    break
  case BUTTON_TYPE.DISABLED:
    buttonStyle = {
      background: COLORS.GREY,
      color: COLORS.WHITE,
      border: `1px solid ${COLORS.GREY}`
    }
    break
  case BUTTON_TYPE.PRIMARY:
    buttonStyle = {
      background: COLORS.PRIMARY,
      color: COLORS.WHITE,
      border: 'none',
    }
    break
  case BUTTON_TYPE.WHITE:
    buttonStyle = {
      background: COLORS.WHITE,
      color: COLORS.PRIMARY,
      border: 'none',
    }
    break
  case BUTTON_TYPE.LIGHT_GREY:
    buttonStyle = {
      background: COLORS.LIGHT_GREY,
      color: COLORS.PRIMARY,
      border: 'none',
    }
    break
  case BUTTON_TYPE.BORDER_BLUE:
    buttonStyle = {
      background: COLORS.WHITE,
      color: COLORS.PRIMARY,
      border: `1px solid ${COLORS.PRIMARY}`
    }
    break
  case BUTTON_TYPE.BORDER_RED:
    buttonStyle = {
      background: COLORS.WHITE,
      color: COLORS.ERROR,
      border: `1px solid ${COLORS.ERROR}`
    }
    break
  case BUTTON_TYPE.BORDER_GREY:
    buttonStyle = {
      background: COLORS.WHITE,
      color: COLORS.GREY,
      border: `1px solid ${COLORS.LIGHT_GREY}`
    }
    break
  case BUTTON_TYPE.DANGER:
    buttonStyle = {
      background: COLORS.RED,
      color: COLORS.WHITE,
      border: 'none',
    }
  }

  return (
    <StyledButton buttonStyle={buttonStyle} onClick={buttonProps.onClick} noBorderRadius={buttonProps.noBorderRadius} disabled={buttonProps.disabled} className={buttonProps.className}>
      {buttonProps.icon && <buttonProps.icon/>}
      {buttonProps.text && <span>{buttonProps.text}</span>}
    </StyledButton>
  )
}

export default Button