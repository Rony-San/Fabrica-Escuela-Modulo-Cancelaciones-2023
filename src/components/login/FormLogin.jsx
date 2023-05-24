import { loginSuccess, loginFailure } from '../../app/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function FormLogin() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')

  const navegate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(usuario, contraseña)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  }

  const login = async (usuario, contraseña) => {
    await axios
      .post('http://localhost:8080/api/estudiante/autenticar-login', {
        usuario,
        contraseña
      })
      .then((response) => {
        const user = response.data
        dispatch(loginSuccess({ user }))
        navegate('/cancelacionCurso')
      })
      .catch((error) => {
        dispatch(loginFailure({ error: error.message }))
        toast.error('Usuario o contraseña incorrectos')
      })
  }

  return (
    <div className='main_wrapper'>
      <h1>Ingreso</h1>
      <form onSubmit={handleSubmit}>
        <div className='text_field'>
          <input
            name='user'
            type='text'
            required
            value={usuario}
            onChange={(event) => {
              setUsuario(event.target.value)
            }}
          />
          <label htmlFor='user'>Usuario</label>
        </div>
        <div className='text_field'>
          <input
            name='password'
            type='password'
            required
            value={contraseña}
            onChange={(event) => {
              setContraseña(event.target.value)
            }}
          />
          <label htmlFor='password'>Contraseña</label>
        </div>
        <div className='pass'>Olvido su contraseña?</div>
        <input type='submit' value='Login' />
        <div className='signup_link'>
          No está registrado?
          <a href='#'>Registrarse </a>
        </div>
      </form>
    </div>
  )
}
