import { DateRangePicker } from 'rsuite'
import { IRangePicker } from './RangePicker.interfaces'
import { CustomProvider } from 'rsuite'
import pt_BR from 'rsuite/locales/pt_BR'

const RangePicker = (rangePickerProps: IRangePicker) => {
  return (
    <CustomProvider locale={pt_BR}>
      <DateRangePicker 
        style={{ width: 230 }}
        showOneCalendar = {window.innerWidth <= 768}
        placement='bottomEnd'
        format='dd-MM-yyyy'
        character=' → '
        placeholder={rangePickerProps.placeholder}
        onChange={rangePickerProps.handleChange}/>
    </CustomProvider>
  )
}

export default RangePicker