import PhoneInput from '../PhoneInput/PhoneInput'
import { IInfoCard } from './InfoCard.interfaces'
import { Container, Title } from './InfoCard.styles'

const InfoCardPhone = (infoCardProps: IInfoCard) => {
  return (
    <Container>
      <Title>{infoCardProps.title}</Title>
      <PhoneInput defaultValue={infoCardProps.defaultValue} value={infoCardProps.value} handleChange={infoCardProps.handleChange} disabled={infoCardProps.disabled}/>
    </Container>
  )
}

export default InfoCardPhone