import { loginSuccess, loginFailure } from '../../app/features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function FormLogin() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [url, setUrl] = useState('')
  const [text, setText] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const role = useSelector((state) => state.auth.role)

  useEffect(() => {
    if (role === 'student') {
      setUrl('http://localhost:8080/api/estudiante/autenticar-login')
      setText('Estudiantes')
    } else {
      setUrl('http://localhost:8080/api/profesor/autenticar-login')
      setText('Profesores')
    }
  }, [role])

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
      .post(url, {
        usuario,
        contraseña
      })
      .then((response) => {
        const user = response.data
        dispatch(loginSuccess({ user }))
        if (role === 'student'){
          navigate('/cancelacionCurso')
        } else {
          navigate('/docentesCancelaciones')
        }
      })
      .catch((error) => {
        dispatch(loginFailure({ error: error.message }))
        toast.error('Usuario o contraseña incorrectos')
      })
  }

  return (
    <div className='main_wrapper'>
      <h1> {text} </h1>
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
