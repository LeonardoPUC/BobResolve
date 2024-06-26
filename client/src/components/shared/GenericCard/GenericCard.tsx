import { COLORS } from '../../../constants/enum'
import { IGenericCardStyle, IGenericCard } from './GenericCard.interfaces'
import { Container, TextContainer } from './GenericCard.styles'
import { GENERIC_CARD_TYPE } from '../../../constants/enum'

const GenericCard = (GenericCardProps: IGenericCard) => {
  let GenericCardStyle: IGenericCardStyle = {
    iconBackground: 'white',
    iconColor: 'white',
    border: 'none',
    borderRadius: '0',
    borderLeft: 'none'
  }

  switch (GenericCardProps.type) {
  case GENERIC_CARD_TYPE.NORMAL:
    GenericCardStyle = {
      iconBackground: COLORS.SUCCESS,
      iconColor: 'white',
      borderLeft: `4px solid ${COLORS.SUCCESS}`,
      borderRadius: '50%',
      border: 'none'
    }
    break
  case GENERIC_CARD_TYPE.ALERT:
    GenericCardStyle = {
      iconBackground: COLORS.ALERT,
      iconColor: 'white',
      borderLeft: `4px solid ${COLORS.ALERT}`,
      borderRadius: '50%',
      border: 'none'
    }
    break
  case GENERIC_CARD_TYPE.ERROR:
    GenericCardStyle = {
      iconBackground: COLORS.ERROR,
      iconColor: 'white',
      borderLeft: `4px solid ${COLORS.ERROR}`,
      borderRadius: '50%',
      border: 'none'
    }
    break
  case GENERIC_CARD_TYPE.OFFLINE:
    GenericCardStyle = {
      iconBackground: COLORS.OFFLINE,
      iconColor: 'white',
      borderLeft: `4px solid ${COLORS.OFFLINE}`,
      borderRadius: '50%',
      border: 'none'
    }
    break
  case GENERIC_CARD_TYPE.GREY:
    GenericCardStyle = {
      iconBackground: COLORS.TRANSPARENT,
      iconColor: COLORS.LIGHT_GREY,
      borderLeft: 'none',
      borderRadius: '0',
      border: 'none'
    }
    break
  case GENERIC_CARD_TYPE.GREY_BORDER:
    GenericCardStyle = {
      iconBackground: COLORS.TRANSPARENT,
      iconColor: COLORS.LIGHT_GREY,
      borderLeft: `1px solid ${COLORS.LIGHT_GREY}`,
      borderRadius: '0',
      border: `1px solid ${COLORS.LIGHT_GREY}`,
    }
    break
  }
  
  return (
    <Container genericCardStyle={GenericCardStyle} data-testid="Generic-card">
      <div>
        {GenericCardProps.icon && <GenericCardProps.icon/>}
      </div>
      <TextContainer>
        {GenericCardProps.topText}
        <div>
          {GenericCardProps?.leftText}
          <span><>&nbsp;</>
            {GenericCardProps.bottomText}
          </span>
          <>&ensp;</>{GenericCardProps?.rightText}
        </div>
      </TextContainer>
    </Container>
  )
}

export default GenericCard