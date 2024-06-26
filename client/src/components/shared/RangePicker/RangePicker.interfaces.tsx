import { DateRange } from 'rsuite/esm/DateRangePicker'

export interface IRangePicker {
    handleChange: (value: DateRange | null) => void,
    placeholder: string
}