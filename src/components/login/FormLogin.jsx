import React, { useState, useEffect } from 'react'
import useFormData from './useFormData'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function FormLogin() {
  /*
  const users = [{
    "user": "jaime",
    "password": "123"
  }, {
    "user": "rony",
    "password": "123"
  }, {
    "user": "jeison",
    "password": "123"
  }, {
    "user": "alejandro",
    "password": "123"
  }]

  
  const navegate = useNavigate();
  const { form, formData, updateFormData } = useFormData();
  const [data, setData] = useState([])
  const [check, setCheck] = useState(false)

  const submitLogin = (e) => {
    e.preventDefault();
    setData(formData);
    setCheck(!check)
  };

  useEffect(() => {
    if (check) {
      console.log(data);
      const jsonString = JSON.stringify(data);
      const found = users.some(data => JSON.stringify(data) === jsonString);
      if (found) {
        navegate("/cancelacionCurso")
      } else {
        toast.error('Acceso denegado')
      }
      setCheck(!check);
    }
  }, [check]);
  */

  //Autenticación consumiendo la api-rest
  const navegate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  async function login() {
    try {
      await axios
        .post('http://localhost:8080/api/login', {
          usuario: usuario,
          contraseña: contraseña
        })
        .then(
          (response) => {
            console.log(response.data)
            if (response.data.mensaje === 'El usuario no existe') {
              toast.error('El usuario no existe')
            } else if (response.data.mensaje === 'El login fue exitoso') {
              navegate('/cancelacionCurso/' + usuario)
            } else {
              toast.error('Usuario o contraseña incorrectos')
            }
          },
          (fail) => {
            console.error(fail)
          }
        )
    } catch (error) {
      alert(error)
    }
  }

  const handleLogin = (event) => {
    event.preventDefault()
    login()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  //<form ref={form} onSubmit = {submitLogin} onChange={updateFormData}>
  return (
    <div className='main_wrapper'>
      <h1>Ingreso</h1>
      <form onSubmit={handleLogin}>
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
