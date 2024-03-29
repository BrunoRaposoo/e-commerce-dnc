/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import ProductsCard from '../../components/ProductsCard/ProductsCard'

// eslint-disable-next-line react/prop-types
const Home = ({data}) => {
  return (
    <div className='home'>
      <HeaderMenu />
      <Search />
      <div className="home__products">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product}/>
        ))}
      </div>

    </div>
  )
}

export default Home