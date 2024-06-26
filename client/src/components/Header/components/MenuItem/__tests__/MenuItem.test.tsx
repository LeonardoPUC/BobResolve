import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BASE_URL_PLATFORM, ICONS_TYPE } from '../../../../../constants/enum'
import MenuItem from '../MenuItem'

const menuObject = {
  id: 1,
  name: 'Dashboard',
  icon: ICONS_TYPE.GRAPH_UP_ARROW,
  subMenu: [
    {
      id: 1,
      name: 'User',
      icon: ICONS_TYPE.GRAPH_UP_ARROW,
      subMenu: [],
      url: ''
    }
  ],
  url: ''
}

const noSubmenuObject = {
  id: 1,
  name: 'Dashboard',
  icon: ICONS_TYPE.GRAPH_UP_ARROW,
  subMenu: [],
  url: 'home'
}

describe('MenuItem component', () => {
  it('should render submenu closed', () => {
    const { getByText } = render(
      <MenuItem isSubMenuOpen={false} handleSubMenuOpen={jest.fn()} item={menuObject} isMenuOpen={true}/>
    )
    
    expect(getByText('User')).not.toBeVisible()
  })

  it('should render submenu open', () => {
    const { getByText } = render(
      <MenuItem isSubMenuOpen={true} handleSubMenuOpen={jest.fn()} item={menuObject} isMenuOpen={true}/>
    )

    expect(getByText('User')).toBeVisible()
  })

  it('should call open submenu handler', () => {
    const handleOpensubMenu = jest.fn()

    const { getByText } = render(
      <MenuItem isSubMenuOpen={false} handleSubMenuOpen={handleOpensubMenu} item={menuObject} isMenuOpen={true}/>
    )
    
    expect(getByText('User')).not.toBeVisible()
    const menuItem = getByText('Dashboard')
    userEvent.click(menuItem)
    expect(handleOpensubMenu).toBeCalledTimes(1)
  })

  it('should redirect on menu click', () => {
    global.window = Object.create(window)
    
    Object.defineProperty(window, 'location', {
      value: {
        href: '/',
      }
    })

    const { getByText } = render(
      <MenuItem isSubMenuOpen={false} handleSubMenuOpen={jest.fn()} item={noSubmenuObject} isMenuOpen={true}/>
    )

    const menuItem = getByText('Dashboard')
    userEvent.click(menuItem)
    expect(window.location.href).toBe('http://localhost:3000/home')
  })

  it('should redirect on logout menu click', () => {
    global.window = Object.create(window)

    window.location.href = '/home'

    const { getByText } = render(
      <MenuItem isLogout isSubMenuOpen={false} handleSubMenuOpen={jest.fn()} item={noSubmenuObject} isMenuOpen={true}/>
    )

    const menuItem = getByText('Dashboard')
    userEvent.click(menuItem)
    expect(window.location.href).toBe('http://localhost:3000/')
  })

  it('should redirect on header menu click', () => {
    global.window = Object.create(window)

    window.location.href = '/home'

    const { getByText } = render(
      <MenuItem isHeaderMenu isSubMenuOpen={false} handleSubMenuOpen={jest.fn()} item={noSubmenuObject} isMenuOpen={true}/>
    )

    const menuItem = getByText('Dashboard')
    userEvent.click(menuItem)
    expect(window.location.href).toBe(BASE_URL_PLATFORM)
  })
})
