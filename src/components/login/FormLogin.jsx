import './FormLogin.css'

export default function FormLogin() {
  return (
    <div class='main_wrapper'>
      <h1>Ingreso</h1>
      <form method='post'>
        <div class='text_field'>
          <input type='text' required />
          <label>Usuario</label>
        </div>
        <div class='text_field'>
          <input type='password' required />
          <label>Cntraseña</label>
        </div>
        <div class='pass'>Olvido su contraseña?</div>
        <input type='submit' value='Login' />
        <div class='signup_link'>
          No está regustrado?
          <a href='#'>Registrarse </a>
        </div>
      </form>
    </div>
  )
}
