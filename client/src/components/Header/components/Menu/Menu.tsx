/* eslint-disable */
import { Container, Content, HeaderMenuContainer, LogoutContainer, OverflowX, UserContainer } from './Menu.styles'
import MenuItem from '../MenuItem/MenuItem'
import { FiMenu, FiX } from 'react-icons/fi'
import { IMenu } from './Menu.interfaces'
import { MENU_MOCK } from './__mocks__/MENU_MOCK'
import Avatar from '../Avatar/Avatar'
import Profile from '../Profile/Profile'
import { COLORS } from '../../../../constants/enum'
import { useState } from 'react'
import useAccessKeyStore from '../../../../stores/accessKey'

const Menu = (menuProps: IMenu) => {
  const userId = useAccessKeyStore(state => state.userCredentials.userId).toString()
  const [subMenuOpen, setSubMenuOpen] = useState<number>()

  const handleSubMenuOpen = (id: number) => setSubMenuOpen(id === subMenuOpen ? undefined : id)

  return (
    <>
      <OverflowX open={menuProps.open} onClick={menuProps.handleMenuOpen}>
        {!menuProps.open && <FiMenu />}
        {menuProps.open && <FiX />}
      </OverflowX>
      <Container id='mainMenu' open={menuProps.open} >
        {!menuProps.open && <FiMenu data-testid="open-menu" onClick={menuProps.handleMenuOpen} />}
        {menuProps.open && <FiX onClick={menuProps.handleMenuOpen} />}
        <HeaderMenuContainer>
          <UserContainer href='user/1'>
            <Avatar />
            <Profile color={COLORS.WHITE} />
          </UserContainer>
        </HeaderMenuContainer>
        <Content>
          {
            MENU_MOCK.menus.map(menu => {
                return (
                  <MenuItem
                    isSubMenuOpen={subMenuOpen === menu.id}
                    handleSubMenuOpen={handleSubMenuOpen}
                    item={menu}
                    key={`menu-${menu.id}`}
                    isMenuOpen={menuProps.open}
                  />
                );
            })
          }
          <HeaderMenuContainer >
            {MENU_MOCK.headerMenus.map(submenu => {
              return (
                <MenuItem
                  isHeaderMenu
                  isSubMenuOpen={subMenuOpen === submenu.id}
                  handleSubMenuOpen={handleSubMenuOpen}
                  item={submenu}
                  key={`submenu-${submenu.id}`}
                  isMenuOpen={menuProps.open}
                />
              );
            })}
          </HeaderMenuContainer>
          <LogoutContainer>
            <MenuItem
              isLogout
              isSubMenuOpen={subMenuOpen === MENU_MOCK.logout.id}
              handleSubMenuOpen={handleSubMenuOpen}
              item={MENU_MOCK.logout}
              isMenuOpen={menuProps.open}
            />
          </LogoutContainer>
        </Content>
      </Container>
    </>
  )
}

export default Menu