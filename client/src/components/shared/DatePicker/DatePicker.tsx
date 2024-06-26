import { DatePicker } from 'rsuite'
import { IDatePicker } from './DatePicker.interfaces'
import { CustomProvider } from 'rsuite'
import pt_BR from 'rsuite/locales/pt_BR'

const DatePickerComponent = (datePickerProps: IDatePicker) => {
  return (
    <CustomProvider locale={pt_BR}>
      <DatePicker 
        style={{ width: 230 }}
        placement='bottomEnd'
        format={datePickerProps.format}
        z-index= '10'
        placeholder={datePickerProps.placeholder}/>
    </CustomProvider>
  )
}
  
export default DatePickerComponent