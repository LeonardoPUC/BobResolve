import { DateRange } from 'rsuite/esm/DateRangePicker'

export interface IDatePicker {
    handleChange: (value: DateRange | null) => void,
    format: string,
    placeholder: string
}