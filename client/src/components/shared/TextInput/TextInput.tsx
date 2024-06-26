import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { ITextInput } from './TextInput.interfaces'

const TextInput = (textInputProps: ITextInput) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '100%', margin: textInputProps.filled ? '' : '8px', backgroundColor: 'white' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField hiddenLabel
        id="filled-hidden-label-small"
        defaultValue={textInputProps.defaultValue}
        size="small"
        value={textInputProps.value}
        onChange={textInputProps.handleChange}
        disabled={textInputProps.disabled}
      />
    </Box>
  )
}

export default TextInput