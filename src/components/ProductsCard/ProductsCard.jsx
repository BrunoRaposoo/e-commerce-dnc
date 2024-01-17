/* eslint-disable react/prop-types */
import './index.scss'
import { Link } from 'react-router-dom'
 
 const ProductsCard = ({ data }) => {
   return (
     <div className='home__card'>
      <img src={data.imgPath} alt="" />
      <div className='home__card-description'>
        <p>{data.title}</p>
          <Link to={`/products/${data.id}`}>
            <button>Comprar Look</button>
          </Link>
      </div>
     </div>
   )
 }
 
 export default ProductsCard