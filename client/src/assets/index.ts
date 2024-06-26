import { ReactComponent as graphUpArrow } from './icons/graph-up-arrow.svg'
import { ReactComponent as solarPanel } from './icons/solar-panel.svg'
import { ReactComponent as sunMachine } from './icons/sun-machine.svg'
import { ReactComponent as energy } from './icons/energy.svg'
import { ReactComponent as ecoProtect } from './icons/eco-protect.svg'
import { ReactComponent as solarHouse } from './icons/solar-house.svg'
import { ReactComponent as solarConect } from './icons/solar-conect.svg'
import { ReactComponent as trees } from './icons/trees.svg'
import { ReactComponent as currencyDollar } from './icons/currency-dollar.svg'
import { ReactComponent as defaultIcon } from './icons/trees.svg'
import { ReactComponent as bell } from './icons/bell.svg'
import { ReactComponent as logout } from './icons/box-arrow-right.svg'
import { ReactComponent as plataform } from './icons/layout-text-window-reverse.svg'
import { ICONS_TYPE } from '../constants/enum'

const ICONS: Record<ICONS_TYPE, React.FunctionComponent> = {
  graphUpArrow, solarPanel, sunMachine, energy, ecoProtect, solarHouse, solarConect, trees, currencyDollar, defaultIcon , bell , logout , plataform
}

export default ICONS