import styled from 'styled-components'
import { IStyleCheckBox } from './CheckBox.interface'

export const Container = styled.div<IStyleCheckBox>`
   text-align: end;
   margin-right: -8px;
   color: ${(props) => props.labelColor};
`