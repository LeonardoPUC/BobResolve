import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { IDropdown } from './Dropdown.interfaces'

const Dropdown = (dropdownProps: IDropdown) => {
  return (
    <FormControl 
      sx={{ 
        width: dropdownProps.width, 
        backgroundColor: 'white',
        ['@media (max-width: 1200px)']: {
          width: '100%'
        } 
      }} 
      size='small'
    >
      <InputLabel>{dropdownProps.label}</InputLabel>
      <Select
        disabled={dropdownProps.disabled}
        id="select"
        value={dropdownProps.filterValue}
        label={dropdownProps.label}
        onChange={dropdownProps.handleChange}
        defaultValue={dropdownProps.defaultValue}
      >
        {
          dropdownProps.menuItemLabel !== '' &&
          (<MenuItem value=''>{dropdownProps.menuItemLabel}</MenuItem>)
        }
        {dropdownProps.items?.map((item, index) => (
          <MenuItem key={`dropdown-${index}`} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Dropdown