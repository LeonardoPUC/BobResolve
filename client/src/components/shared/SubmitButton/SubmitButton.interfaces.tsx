import { IconType } from 'react-icons'

export interface ISubmitButtonStyle {
    background: string
    color: string
    border: string
}

export interface IStyledSubmitButton {
    buttonStyle: ISubmitButtonStyle
    noBorderRadius?: boolean
}

export interface ISubmitButton {
    text?: string
    buttonType: string
    icon?: IconType
    noBorderRadius?: boolean
}