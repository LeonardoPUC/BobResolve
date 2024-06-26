import Dropdown from '../Dropdown/Dropdown'
import { IInfoCard, IInfoCardDropDown } from './InfoCard.interfaces'
import { Container, Title } from './InfoCard.styles'

const InfoCardDropDown = (infoCardProps: IInfoCardDropDown) => {
  return (
    <Container>
      <Title>{infoCardProps.title}</Title>
      <Dropdown label={infoCardProps.label} menuItemLabel='' defaultValue={infoCardProps.defaultValue} items={infoCardProps.listaItens} handleChange={infoCardProps.handleChange} filterValue={infoCardProps.filterValue} width='100%'/>
    </Container>
  )
}

export default InfoCardDropDown