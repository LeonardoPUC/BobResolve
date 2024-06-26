import { ChangeEventHandler } from 'react'

export interface ISearchFilter {
    onSearch: ChangeEventHandler<HTMLInputElement>
    width?: string 
    label?: string
    value?: string
}