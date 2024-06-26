import { render } from '@testing-library/react'
import GenericCard from '../GenericCard'
import { ReactComponent as solarPanel } from '../../../../assets/icons/solar-panel.svg'
import { COLORS, STATUS_CARD_TYPE } from '../../../../constants/enum'

describe('GenericCard component', () => {
  it('should render normal generic card', () => {
    const { getByText, getByTestId } = render(
      <GenericCard icon={solarPanel} type={STATUS_CARD_TYPE.NORMAL} topText='status card' bottomText='12'/>
    )

    expect(getByText('status card')).toBeInTheDocument()
    expect(getByText('12')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('status-card')).borderLeft).toBe(`4px solid ${COLORS.SUCCESS}`)
  })

  it('should render alert status card', () => {
    const { getByText, getByTestId } = render(
      <GenericCard icon={solarPanel} type={STATUS_CARD_TYPE.ALERT} topText='generic card' bottomText='13'/>
    )

    expect(getByText('generic card')).toBeInTheDocument()
    expect(getByText('13')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('generic-card')).borderLeft).toBe(`4px solid ${COLORS.ALERT}`)
  })

  it('should render error generic card', () => {
    const { getByText, getByTestId } = render(
      <GenericCard icon={solarPanel} type={STATUS_CARD_TYPE.ERROR} topText='generics card' bottomText='14'/>
    )
      
    expect(getByText('status card')).toBeInTheDocument()
    expect(getByText('14')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('status-card')).borderLeft).toBe(`4px solid ${COLORS.ERROR}`)
  })
    
  it('should render grey generic card', () => {
    const { getByText, getByTestId } = render(
      <GenericCard icon={solarPanel} type={STATUS_CARD_TYPE.GREY} topText='generic card' bottomText='15'/>
    )
  
    expect(getByText('generic card')).toBeInTheDocument()
    expect(getByText('15')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('generic-card')).borderLeft).toBe('')
  })

  it('should render grey border generic card', () => {
    const { getByText, getByTestId } = render(
      <GenericCard icon={solarPanel} type={STATUS_CARD_TYPE.GREY_BORDER} topText='generic card' bottomText='15'/>
    )
  
    expect(getByText('generic card')).toBeInTheDocument()
    expect(getByText('15')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('generic-card')).borderLeft).toBe(`1px solid ${COLORS.LIGHT_GREY}`)
  })
})