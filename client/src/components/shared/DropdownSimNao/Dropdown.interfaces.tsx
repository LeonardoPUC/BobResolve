import { SelectChangeEvent } from '@mui/material'

export interface IDropdown {
    label: string
    items: string[] | undefined
    filterValue: string
    handleChange: (event: SelectChangeEvent) => void
    width: string 
    disabled?: boolean
}

export interface IDropdownSimNao {
    label: string
    handleChange: (event: SelectChangeEvent) => void
    width: string 
    disabled?: boolean
    selectedOption: any
    defaultValue?: any
}