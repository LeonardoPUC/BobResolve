import Breadcrumb from '../Breadcrumb'
import { BREADCRUMB_LINKS } from './../../../../constants/enum'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe ('Breadcrumb component', () => {
  it('should render Breadcrumb', () => {
    const { getByText } = render(
      <Breadcrumb current="breadcrumb test" links={BREADCRUMB_LINKS.POWER_STATION}/>
    )
    
    expect(getByText('breadcrumb test')).toBeInTheDocument()
    expect(getByText('Início')).toBeInTheDocument()
    expect(getByText('Usinas')).toBeInTheDocument()
  })

  it('should redirect on breadcrumb click', () => {
    global.window = Object.create(window)
    
    Object.defineProperty(window, 'location', {
      value: {
        href: '/power-station/import',
      }
    })

    const { getByText } = render(
      <Breadcrumb current="breadcrumb test" links={BREADCRUMB_LINKS.POWER_STATION}/>
    )

    expect(window.location.href).toBe('/power-station/import')
    const breadcrumbItem = getByText('Início')
    userEvent.click(breadcrumbItem)
    expect(window.location.href).toBe('/')
  })
})