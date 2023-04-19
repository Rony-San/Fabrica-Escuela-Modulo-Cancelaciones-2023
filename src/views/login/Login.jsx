import FormLogin from '../../components/login/FormLogin'
//import backgroundLogin from '../../assets/images/backgroundLogin.jpg'
import './Login.css'

export default function Login() {
  return (
    <div class='center'>
      <div class='image'>
        <img src='/public/backgroundLogin.jpg' alt='' />
      </div>
      <FormLogin />
    </div>
  )
}
