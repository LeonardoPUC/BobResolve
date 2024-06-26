export interface IGenericCardStyle {
    iconBackground: string
    iconColor: string
    border: string
    borderLeft: string
    borderRadius: string
}

export interface IStyledGenericCard {
    genericCardStyle: IGenericCardStyle
}

export interface IGenericCard {
    icon?: React.FunctionComponent
    type: string
    bottomText: number | string
    topText: string
    leftText?: string
    rightText?: string
    statusId?: string
}