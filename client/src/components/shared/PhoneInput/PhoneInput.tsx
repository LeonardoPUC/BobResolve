/* eslint-disable */
import { Box } from "@mui/material"
import { InputMask } from 'primereact/inputmask'
import { IPhoneInput } from "./PhoneInput.interfaces"

const PhoneInput = (phoneInputProps: IPhoneInput) => {
  return (
    <InputMask style={{borderRadius: "2px", border: "1px solid #CED4DA", 
                       padding: "8.5px 14px"}} defaultValue={phoneInputProps.defaultValue} value={phoneInputProps.value} onChange={phoneInputProps.handleChange} mask="(99) 99999-9999"/>
    )
}

export default PhoneInput