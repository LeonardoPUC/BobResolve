import { SelectChangeEvent } from '@mui/material'

export interface IDropdown {
    label: string
    menuItemLabel?: string
    items: string[] | undefined
    filterValue: string
    handleChange: (event: SelectChangeEvent) => void
    width: string 
    disabled?: boolean
    defaultValue?: string
    value?: string
    onLoading?: boolean
}