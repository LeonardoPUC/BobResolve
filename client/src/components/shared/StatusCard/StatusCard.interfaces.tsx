export interface IStatusCardStyle {
    iconBackground: string
    iconColor: string
    border: string
    borderLeft: string
    borderRadius: string
    overflow: string
    textOverflow: string
    cursor: string
    opacity: string
    hyperlink?: boolean
}

export interface IStyledStatusCard {
    statusCardStyle: IStatusCardStyle
}

export interface IStatusCard {
    icon?: React.FunctionComponent
    type: string
    bottomText: number | string
    topText: string
    leftText?: string
    rightText?: string
    hyperlink?: boolean
}