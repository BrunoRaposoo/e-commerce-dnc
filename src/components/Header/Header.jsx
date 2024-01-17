import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import "./index.scss"

const Header = () => {
  return (
    <div className='header'>
      <Link to={`/home`}>
        <img src={logo} alt="Logo DNC" />
      </Link>
    </div>
  )
}

export default Header