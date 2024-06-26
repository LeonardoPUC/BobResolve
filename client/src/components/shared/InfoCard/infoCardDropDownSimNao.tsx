import Dropdown from '../Dropdown/Dropdown'
import Dropdownsimnao from '../DropdownSimNao/Dropdownsimnao'
import { IInfoCard, IInfoCardDropDown, IInfoCardDropDownSimNao } from './InfoCard.interfaces'
import { Container, Title } from './InfoCard.styles'

const InfoCardDropDownSimNao = (infoCardProps: IInfoCardDropDownSimNao) => {
  return (
    <Container>
      <Title>{infoCardProps.title}</Title>
      <Dropdownsimnao label={infoCardProps.label} defaultValue={infoCardProps.defaultValue} handleChange={infoCardProps.handleChange} width='100%' selectedOption={infoCardProps.selectedOption}/>
    </Container>
  )
}

export default InfoCardDropDownSimNao