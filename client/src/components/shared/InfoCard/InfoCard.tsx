import TextInput from './../TextInput/TextInput'
import { IInfoCard } from './InfoCard.interfaces'
import { Container, Title } from './InfoCard.styles'

const InfoCard = (infoCardProps: IInfoCard) => {
  return (
    <Container>
      <Title>{infoCardProps.title}</Title>
      <TextInput filled={true} defaultValue={infoCardProps.defaultValue} value={infoCardProps.value} handleChange={infoCardProps.handleChange} disabled={infoCardProps.disabled}/>
    </Container>
  )
}

export default InfoCard