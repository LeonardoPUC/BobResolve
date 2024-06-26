import { Container, SubMenuContainer, MenuTitle } from './MenuItem.styles'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { ISubMenu } from './MenuItem.interfaces'
import ICONS from '../../../../assets'
import useAccessKeyStore from '../../../../stores/accessKey'

const MenuItem = (menuProps: ISubMenu) => {
  const removeKey = useAccessKeyStore((state) => state.removeCredentials)

  const onMenuClick = () => {
    if (menuProps.item?.subMenu?.length > 0) {
      menuProps.handleSubMenuOpen(menuProps.item.id)
    } else {
      if (menuProps.isLogout) {
        removeKey()
        window.location.href = process.env.REACT_APP_BASE_URL || ''
      } else {
        window.location.href = `${process.env.REACT_APP_BASE_URL?.concat(
          menuProps.item.url
        )}`
      }
    }
  }

  const Icon =
    ICONS[menuProps.item.icon || 'defaultIcon'] || ICONS['defaultIcon']
  return (
    <>
      <Container onClick={onMenuClick} className={'idMenu' + menuProps.item.id}>
        <MenuTitle>
          <Icon />
          {menuProps.isMenuOpen && <span>{menuProps.item.name}</span>}
        </MenuTitle>
        {!menuProps.isSubMenuOpen &&
          menuProps.isMenuOpen &&
          menuProps.item?.subMenu?.length > 0 && <FiChevronDown />}
        {menuProps.isSubMenuOpen &&
          menuProps.isMenuOpen &&
          menuProps.item?.subMenu?.length > 0 && <FiChevronUp />}
      </Container>
      {menuProps.isMenuOpen &&
        menuProps.item.subMenu &&
        menuProps.item?.subMenu?.map((submenu, index: number) => (
          <SubMenuContainer
            open={menuProps.isSubMenuOpen}
            key={`menuItem-${index}`}
          >
            <MenuItem
              handleSubMenuOpen={menuProps.handleSubMenuOpen}
              isSubMenuOpen={false}
              item={submenu}
              isMenuOpen={menuProps.isMenuOpen}
            />
          </SubMenuContainer>
        ))}
    </>
  )
}

export default MenuItem
