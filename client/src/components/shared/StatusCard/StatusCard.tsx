/* eslint-disable */
import { COLORS } from '../../../constants/enum'
import { IStatusCardStyle, IStatusCard } from './StatusCard.interfaces'
import { Container, TextContainer } from './StatusCard.styles'
import { STATUS_CARD_TYPE } from './../../../constants/enum'
import { useState } from 'react'
import { useAxios } from '../../../services/useAxios'

const StatusCard = (StatusCardProps: IStatusCard) => {
  let statusCardStyle: IStatusCardStyle = {
    iconBackground: 'white',
    iconColor: 'white',
    border: 'none',
    borderRadius: '0',
    borderLeft: 'none',
    overflow: 'none',
    textOverflow: 'none',
    cursor: 'defaults',
    opacity: '1'
  }

  const [cursor, setCursor] = useState(!StatusCardProps.hyperlink ? 'auto' : 'pointer');
  const [opacity, setOpacity] = useState(!StatusCardProps.hyperlink ? '1' : '0.5');

  switch (StatusCardProps.type) {
    case STATUS_CARD_TYPE.NORMAL:
      statusCardStyle = {
        iconBackground: COLORS.SUCCESS,
        iconColor: 'white',
        borderLeft: `4px solid ${COLORS.SUCCESS}`,
        borderRadius: '50%',
        border: `1px solid ${COLORS.LIGHT_GREY}`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: cursor,
        opacity: opacity
      }
      break
    case STATUS_CARD_TYPE.ALERT:
      statusCardStyle = {
        iconBackground: COLORS.ALERT,
        iconColor: 'white',
        borderLeft: `4px solid ${COLORS.ALERT}`,
        borderRadius: '50%',
        border: `1px solid ${COLORS.LIGHT_GREY}`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: cursor,
        opacity: opacity
      }
      break
    case STATUS_CARD_TYPE.NOCOMUNICATION:
      statusCardStyle = {
        iconBackground: COLORS.NOCOMUNICATION,
        iconColor: 'white',
        borderLeft: `4px solid ${COLORS.NOCOMUNICATION}`,
        borderRadius: '50%',
        border: `1px solid ${COLORS.LIGHT_GREY}`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: cursor,
        opacity: opacity
      }
      break
    case STATUS_CARD_TYPE.OFFLINE:
      statusCardStyle = {
        iconBackground: COLORS.OFFLINE,
        iconColor: 'white',
        borderLeft: `4px solid ${COLORS.OFFLINE}`,
        borderRadius: '50%',
        border: `1px solid ${COLORS.LIGHT_GREY}`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: cursor,
        opacity: opacity
      }
      break
    case STATUS_CARD_TYPE.GREY:
      statusCardStyle = {
        iconBackground: COLORS.TRANSPARENT,
        iconColor: COLORS.LIGHT_GREY,
        borderLeft: 'none',
        borderRadius: '0',
        border: 'none',
        overflow: 'none',
        textOverflow: 'none',
        cursor: 'defaults',
        opacity: '1'
      }
      break
    case STATUS_CARD_TYPE.GREY_BORDER:
      statusCardStyle = {
        iconBackground: COLORS.TRANSPARENT,
        iconColor: COLORS.GREY,
        borderLeft: `1px solid ${COLORS.LIGHT_GREY}`,
        borderRadius: '0',
        border: `1px solid ${COLORS.LIGHT_GREY}`,
        overflow: 'none',
        textOverflow: 'none',
        cursor: 'defaults',
        opacity: '1'
      }
      break
      case STATUS_CARD_TYPE.INVALIDLOGIN:
        statusCardStyle = {
          iconBackground: COLORS.LIGHT_YELLOW,
          iconColor: 'white',
          borderLeft: `4px solid ${COLORS.LIGHT_YELLOW}`,
          borderRadius: '50%',
          border: `1px solid ${COLORS.LIGHT_GREY}`,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          cursor: cursor,
          opacity: opacity
        }
        break
  }


  const api = useAxios()

  return (
    <>
      {
        StatusCardProps.hyperlink ? (
          <>
            <Container statusCardStyle={statusCardStyle} data-testid="status-card" onClick={() => window.location.href = '/novoorcamento'}>
              <div>
                {StatusCardProps.icon && <StatusCardProps.icon />}
              </div>
              <TextContainer>
                {StatusCardProps.topText}
                <div>
                  {StatusCardProps?.leftText}
                  <span>
                    {StatusCardProps.bottomText}
                  </span>
                  {StatusCardProps?.rightText}
                </div>
              </TextContainer>
            </Container>
          </>
        ) :
          (
            <>
              <Container statusCardStyle={statusCardStyle} data-testid="status-card">
                <div>
                  {StatusCardProps.icon && <StatusCardProps.icon />}
                </div>
                <TextContainer>
                  {StatusCardProps.topText}
                  <div>
                    {StatusCardProps?.leftText}
                    <span>
                      {StatusCardProps.bottomText}
                    </span>
                    {StatusCardProps?.rightText}
                  </div>
                </TextContainer>
              </Container>
            </>
          )
      }
    </>
  )
}

export default StatusCard