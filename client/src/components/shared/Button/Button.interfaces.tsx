import { IconType } from 'react-icons'

export interface IButtonStyle {
    background: string
    color: string
    border: string
}

export interface IStyledButton {
    buttonStyle: IButtonStyle
    noBorderRadius?: boolean
}

export interface IButton {
    text?: string
    buttonType: string
    icon?: IconType
    onClick: (props: unknown) => unknown
    noBorderRadius?: boolean
    disabled?: boolean
    className?: string
}