import FormLogin from '../../components/login/FormLogin'
import { ToastContainer } from 'react-toastify'
//import backgroundLogin from '../../assets/images/backgroundLogin.jpg'
import './Login.css'

export default function Login() {
  return (
    <div className='center'>
      <div className='image'>
        <img src='/public/backgroundLogin.jpg' alt='udea' />
      </div>
      <FormLogin />
      <ToastContainer position="top-left" autoClose={4000} />
    </div>
    
  )
}
