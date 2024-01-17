import './index.scss'
import search from '../../assets/search.svg'
import profile from '../../assets/profile.svg'
import heart from '../../assets/heart.svg'

const Search = () => {
  return (
    <div className='search'>
      <div className='search__input-container'>
        <img src={search} alt="Lupa" />
        <input type="text" placeholder='O que você está procurando?' />
      </div>
      <div className='search__outside-container'>
        <img src={profile} alt="perfil" />
        <img src={heart} alt="favoritos" />
      </div>
    </div>
  )
}

export default Search