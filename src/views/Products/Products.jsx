/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import ProductsDetail from '../../components/ProductsDetail/ProductsDetail'
import Search from '../../components/Search/Search'
import './index.scss'

const Products = ({ data }) => {
  const { productId } = useParams()
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <div className='products'>
      <HeaderMenu />
      <Search />
      <ProductsDetail data={selectedProduct} />
    </div>
  )
}

export default Products