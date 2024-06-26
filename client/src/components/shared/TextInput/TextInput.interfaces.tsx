import { SelectChangeEvent } from '@mui/material'

export interface ITextInput {
  defaultValue: string
  filled?: boolean
  value?: string
  handleChange: (event: any) => void 
  disabled?: boolean
}