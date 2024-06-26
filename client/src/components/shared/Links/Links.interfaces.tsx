import { IconType } from 'react-icons'

export interface ILinks {
    text: string   
    icon?: IconType | undefined
    onClick: (props: unknown) => unknown
}