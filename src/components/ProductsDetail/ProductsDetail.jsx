/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'

const ProductsDetail = ({ data }) => {
  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeClick = (index) => {
    setSelectedSize(index)
  }

  return (
    <div className='product-detail'>
      <div className='product-detail__left-side'>
        <div className='product-detail__card'>
          <img src={data.imgPathDetail} alt={data.title} />
          <p>{data.title}</p>
        </div>
        <div className='product-detail__description'>
          <h1>Descrição</h1>
          <p>{data.title}</p>
        </div>
      </div>
      <div className='product-detail__right-side'>
        <h1>Informações Sobre o Produto</h1>
        <span className='product-detail__right-side__line'></span>
        <div className='product-detail__information'>
          <h2>{data.price}</h2>
          <p>
            Cor: {" "}
            {data.ClothingColor.length === 1
              ? data.ClothingColor.map((color, index) => (
                <span key={index}>{color}</span>
              ))
              : data.ClothingColor.map((color, index) => 
              index + 1 === data.ClothingColor.length ? (
                <span key={index}>{color}</span>
              ) : (
                <span key={index}>{color}, </span>
              ))
            }
          </p>
          <div className="product-detail__cube-colors">
            {data.colors.map((color, index) => (
              <div key={index} className='product-detail__cube-colors__color'
                style={{
                  width: "64px",
                  height: "64px",
                  border: "1px solid #b7b7b78f",
                  borderRadius: "10px",
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
          <p>Tamanho:</p>
          <div className='product-detail__sizes'>
            {data.sizes.map((size, index) => (
              <span 
                className={`product-detail__sizes__unite ${index === selectedSize ? 'selected' :  ''}`} 
                key={index}
                onClick= {() => handleSizeClick(index)}
              >
                {size}
              </span>
            ))}
          </div>

          <Link to={`/pay/${data.id}`}>
            <button>Finalizar Compra</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetail