import { Container } from './Header.styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Navbar from './components/Navbar/Navbar'

const Header = () => {
  return (
    <Container>
      <Link to='/Dashboard'><img src={logo}/></Link>
      <Navbar/>
    </Container>
  )
}

export default Header