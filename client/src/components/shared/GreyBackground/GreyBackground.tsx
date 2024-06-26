import { GreyBackgroundContainer } from './GreyBackground.styles'
import { IGreyBackground } from './GreyBackground.interfaces'

const GreyBackground = (greyBackgroundProps: IGreyBackground) => {
  return (
    <GreyBackgroundContainer data-testid='grey-background' open={greyBackgroundProps.open}/>
  )
}

export default GreyBackground