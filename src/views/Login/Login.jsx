import './index.scss'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='login'>
      <Header />
      <form action="" className='login-form'>
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2>você pode entrar com o seu CPF</h2>
        <div className='login-input-wrapper'>
          <label htmlFor="">Digite seu CPF:</label>
          <input 
            type="text"
            placeholder='CPF'
            id='name'
            className='login-input-name'
            required
          />
          <label htmlFor="">Senha:</label>
          <input 
            type="password"
            id='password'
            placeholder='***************'
            required
          />
        </div>
        <div className='btn-login'>
          <Link to={`/home`}>
            <button>Entrar</button>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Login