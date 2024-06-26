import { Checkbox, FormControlLabel } from '@mui/material'
import { ICheckBox } from './CheckBox.interface'
import { Container } from './CheckBox.styles'

const CheckBox = (checkBoxProps: ICheckBox) => {
  return (
    <Container labelColor={checkBoxProps.labelColor}>
      <FormControlLabel control={<Checkbox 
        id={checkBoxProps.id}
        checked={checkBoxProps.checked}
        onChange={checkBoxProps.setChecked}
        sx={{  
          color: checkBoxProps.color,
          '&.Mui-checked': {
            color: checkBoxProps.checkedColor,
          },
        }}
      />}
      label={checkBoxProps.label}/>
    </Container>
  )
}


export default CheckBox