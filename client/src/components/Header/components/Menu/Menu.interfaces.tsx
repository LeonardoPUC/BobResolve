import { ICONS_TYPE } from '../../../../constants/enum'
  
export interface IMenuObject {
    id: number
    name: string
    icon: ICONS_TYPE
    url: string
    subMenu: []
}
  
export interface IMenu {
    handleMenuOpen: () => void
    open: boolean
}

export interface IContainer {
    open: boolean
}