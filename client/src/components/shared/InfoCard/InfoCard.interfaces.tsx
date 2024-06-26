import { SelectChangeEvent } from "@mui/material"

export interface IInfoCard {
  defaultValue: string
  title: string
  value?: string
  handleChange: (event: any) => void 
  disabled?: boolean
}

export interface IInfoCardDropDown {
  title: string
  listaItens: any
  handleChange: (event: SelectChangeEvent) => void
  filterValue: any
  label: string
  defaultValue?: any
  value?: string
  disabled?: boolean
}

export interface IInfoCardDropDownSimNao {
  title: string
  handleChange: (event: SelectChangeEvent) => void
  label: string
  selectedOption: any
  defaultValue?: any
  disabled?: boolean
}