import { Container } from './Header.styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/boblogo_horizontal.png'
import Navbar from './components/Navbar/Navbar'

const Header = () => {
  return (
    <Container>
      <Link to="/Dashboard" style={{ minWidth: 266 }}>
        <img src={logo} style={{ height: 60 }} />
      </Link>
      <Navbar />
    </Container>
  )
}

export default Header
