/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import './index.scss'
import { useEffect, useState } from "react"
import Check from '../../assets/check.svg'

const Pay = ({ data }) => {
  const { payId } = useParams()
  const selectedProduct = data.find((product) => product.id == payId)
  const [showMessage, setShowMessage] = useState(false)

  const handleOnClick = () => {
    setShowMessage(true)
  }

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false)
        window.location.href = '/home'
      }, 2000)
      return() => clearTimeout(timer)
    }
  }, [showMessage])

  return (
    <div>
      <Header />
      <div className="pay-detail">
        <div className="pay-detail__left-side">
          <form className="pay-detail__form">
            <div className="pay-detail__input-wrapper">
              <div className="pay-detail__input-wrapper__name">
                <label htmlFor="name">Nome:</label>
                <input type="text"  placeholder="Nome completo" id="name" />
              </div>
              <div className="pay-detail__input-wrapper__address">
                <label htmlFor="address">Endereço de entrega: </label>
                <input type="text" id="address" placeholder="Endereço de entrega"/>
              </div>
            </div>

            <div className="pay-detail__format">
              <h2>Forma de Pagamento:</h2>
              <div className="pay-detail__pix">
                <input type="checkbox" />
                <label htmlFor="">Pix</label>
              </div>
              <div className="pay-detail__bank-slip">
                <input type="checkbox" />
                <label htmlFor="">Boleto</label>
              </div>
              <div className="pay-detail__credit-card">
                <input type="checkbox" />
                <label htmlFor="">Cartão de Crédito</label>
              </div>
            </div>

            <Link>
              <button type="submit" onClick={handleOnClick}>Enviar Pedido</button>
            </Link>
            {showMessage && 
            <div className="pay-detail__success-message">
              <div className="pay-detail__success-message__content">
                <img src={Check} alt="" />
                <p>PEDIDO ENVIADO COM SUCESSO</p>
              </div>
            </div>}
          </form> 
        </div>

        <div className="pay-detail__right-side">
          <h1>Resumo do Pedido:</h1>
          <div className="pay-detail__resume">
            <p>Produtos (1):</p>
            <span>{selectedProduct.price}</span>
          </div>
          <div className="pay-detail__total">
            <p>Total:</p>
            <span>{selectedProduct.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pay