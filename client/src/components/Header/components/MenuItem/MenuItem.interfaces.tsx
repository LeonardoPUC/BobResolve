import { ICONS_TYPE } from '../../../../constants/enum'

export interface IContainer {
  open: boolean
}

export interface IPage {
  id: number
  url: string
}

export interface IMenuObject {
  id: number
  name: string
  icon: ICONS_TYPE
  subMenu: IMenuObject[]
  url: string
}

export interface ISubMenu {
  item: IMenuObject,
  isMenuOpen: boolean
  isSubMenuOpen: boolean
  isHeaderMenu?: boolean
  isLogout?: boolean
  handleSubMenuOpen: (id: number) => void
}