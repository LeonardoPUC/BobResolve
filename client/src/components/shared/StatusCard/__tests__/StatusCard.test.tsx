import { render } from '@testing-library/react'
import StatusCard from '../StatusCard'
import { ReactComponent as solarPanel } from '../../../../assets/icons/solar-panel.svg'
import { COLORS, STATUS_CARD_TYPE } from '../../../../constants/enum'

describe('StatusCard component', () => {
  it('should render normal status card', () => {
    const { getByText, getByTestId } = render(
      <StatusCard icon={solarPanel} type={STATUS_CARD_TYPE.NORMAL} topText='status card' bottomText='12'/>
    )

    expect(getByText('status card')).toBeInTheDocument()
    expect(getByText('12')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('status-card')).borderLeft).toBe(`4px solid ${COLORS.SUCCESS}`)
  })

  it('should render alert status card', () => {
    const { getByText, getByTestId } = render(
      <StatusCard icon={solarPanel} type={STATUS_CARD_TYPE.ALERT} topText='status card' bottomText='13'/>
    )

    expect(getByText('status card')).toBeInTheDocument()
    expect(getByText('13')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('status-card')).borderLeft).toBe(`4px solid ${COLORS.ALERT}`)
  })

  it('should render error status card', () => {
    const { getByText, getByTestId } = render(
      <StatusCard icon={solarPanel} type={STATUS_CARD_TYPE.ERROR} topText='status card' bottomText='14'/>
    )
      
    expect(getByText('status card')).toBeInTheDocument()
    expect(getByText('14')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('status-card')).borderLeft).toBe(`4px solid ${COLORS.ERROR}`)
  })
    
  it('should render grey status card', () => {
    const { getByText, getByTestId } = render(
      <StatusCard icon={solarPanel} type={STATUS_CARD_TYPE.GREY} topText='status card' bottomText='15'/>
    )
  
    expect(getByText('status card')).toBeInTheDocument()
    expect(getByText('15')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('status-card')).borderLeft).toBe('')
  })

  it('should render grey border status card', () => {
    const { getByText, getByTestId } = render(
      <StatusCard icon={solarPanel} type={STATUS_CARD_TYPE.GREY_BORDER} topText='status card' bottomText='15'/>
    )
  
    expect(getByText('status card')).toBeInTheDocument()
    expect(getByText('15')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('status-card')).borderLeft).toBe(`1px solid ${COLORS.LIGHT_GREY}`)
  })
})