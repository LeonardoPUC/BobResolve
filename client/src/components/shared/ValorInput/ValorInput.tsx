import Box from '@mui/material/Box'
import { ITextInput } from '../TextInput/TextInput.interfaces'
import { InputAdornment, TextField } from '@mui/material'
import { CurrencyInput } from 'react-currency-mask'

const ValorInput = (textInputProps: ITextInput) => {

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { width: '100%', margin: textInputProps.filled ? '' : '8px', backgroundColor: 'white' },
      }}
      noValidate
      autoComplete='off'
    >
      <CurrencyInput
        hideSymbol={true}
        value={textInputProps.value}
        defaultValue={textInputProps.defaultValue}
        InputElement={
          <TextField hiddenLabel
            id="filled-hidden-label-small"
            size="small"
            value={textInputProps.value}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
          />
        }
        onChangeValue={textInputProps.handleChange}
      />
    </Box>
  )
}

export default ValorInput