/* eslint-disable */
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { ITextInput } from '../TextInput/TextInput.interfaces'
import{ NumericFormat, NumericFormatProps } from 'react-number-format';
import React from 'react';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MaskValorInput = React.forwardRef<NumericFormatProps, CustomProps>(
  function ValorInput(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
      />
    );
  },
);

export default MaskValorInput