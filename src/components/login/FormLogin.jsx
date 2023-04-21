import './FormLogin.css'
import React, {useState, useEffect} from 'react'
import useFormData from './useFormData';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

export default function FormLogin() {
  const users = [{
    "user": "jaime",
    "password": "123"
  },{
    "user": "rony",
    "password": "123"
  },{
    "user": "jeison",
    "password": "123"
  }]

  const navegate = useNavigate();
  const {form, formData, updateFormData} = useFormData();
  const [data, setData] = useState([])
  const [check, setCheck] = useState(false)

  const submitLogin = (e) => {
    e.preventDefault();
    setData(formData);
    setCheck(!check)
  };

  useEffect(() => {
    if(check){
      console.log(data);
      const jsonString = JSON.stringify(data);
      const found = users.some(data => JSON.stringify(data) === jsonString);
      if(found){
        navegate("/")
      }else{
        toast.error('Acceso denegado')
      }
      setCheck(!check);
    }
  }, [check]);


  return (
    <div className='main_wrapper'>
      <h1>Ingreso</h1>
      <form ref={form} onSubmit = {submitLogin} onChange={updateFormData}>
        <div className='text_field'>
          <input name="user" type='text' required />
          <label htmlFor="user">Usuario</label>
        </div>
        <div className='text_field'>
          <input name="password" type='password' required />
          <label htmlFor="password">Contraseña</label>
        </div>
        <div className='pass'>Olvido su contraseña?</div>
        <input type='submit' value='Login' />
        <div className='signup_link'>
          No está regustrado?
          <a href='#'>Registrarse </a>
        </div>
      </form>
    </div>
  )
}
