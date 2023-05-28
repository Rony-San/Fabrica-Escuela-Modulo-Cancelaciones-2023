import React from 'react'
import { useSelector } from 'react-redux'

export default function DatosProfesorado() {
  
  const userState = useSelector((state) => state.auth.user)

  //Fecha
  const today = new Date()
  const now = today.toLocaleDateString('es-co')

  return (
    <>
      <div className='first_line_form'>
        <div className='personal_information'>
          <ul className='student_information'>
            <li>
              <p>Fecha:</p>
              <span>{now}</span>
            </li>
            <li>
              <p>Docente:</p>
              <span>
                {userState.nombre} {userState.apellido}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
