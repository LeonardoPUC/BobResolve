import { Container } from './FlexRow.styles'
import { IFlexRow } from './FlexRow.interfaces'
  
const FlexRow = (flexRowProps: IFlexRow) => {
  return (<Container style={flexRowProps.style} inner={flexRowProps.inner === true}>{flexRowProps.children}</Container>)
}

export default FlexRow