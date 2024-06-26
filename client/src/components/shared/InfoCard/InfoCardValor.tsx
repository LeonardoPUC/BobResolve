import TextInput from '../TextInput/TextInput'
import ValorInput from '../ValorInput/ValorInput'
import { IInfoCard } from './InfoCard.interfaces'
import { Container, Title } from './InfoCard.styles'

const InfoCardValor = (infoCardProps: IInfoCard) => {
  return (
    <Container>
      <Title>{infoCardProps.title}</Title>
      <ValorInput filled={true} defaultValue={infoCardProps.defaultValue} value={infoCardProps.value} handleChange={infoCardProps.handleChange}/>
    </Container>
  )
}

export default InfoCardValor