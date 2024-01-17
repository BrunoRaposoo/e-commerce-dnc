import './index.scss'
import LogoDNC from '../../assets/logo.svg'
import carShop from '../../assets/carshop.svg'
import menu from '../../assets/menu.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
      <Link to={`/home`}>
        <img src={LogoDNC} alt="Logo DNC" className='header-menu__logo'/>
      </Link>
      <div className='header-menu__options'>
        <button className="menu-toggle-button" onClick={toggleMenu}>
          <img src={menu} alt="" />
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to={`/home`}>Home</Link></li>
          <li>Novidades</li>
          <li>Feminino</li>
          <li>Masculino</li>
          <li>Atendimentos</li>
        </ul>
      </div>
      <div className='header-menu__car-shop'>
        <p>Meu carrinho</p>
        <img src={carShop} alt="car shop" className='header-menu__carshop-img'/>
      </div>
    </header>
  )
}

export default HeaderMenu