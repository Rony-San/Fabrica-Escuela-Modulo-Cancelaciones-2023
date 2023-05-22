import ModalReglamento from '../Modals/ModalReglamento'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import InformacionReglamento from '../Modals/InformacionReglamento'

export default function DatosEstudiante() {
  const [mostrarAd, setMostrarAd] = useState(false)

  const userState = useSelector((state) => state.auth.user)

  //Fecha
  const today = new Date()
  const now = today.toLocaleDateString('es-co')

  //Datos temporales
  const programa = 'Ingeniería de sistemas'
  const semestre = '5'

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
              <p>Estudiante:</p>
              <span>
                {userState.nombre} {userState.apellido}
              </span>
            </li>
            <li>
              <p>Programa:</p>
              <span>{programa}</span>
            </li>
            <li>
              <p>Semestre:</p>
              <span>{semestre}</span>
            </li>
          </ul>
        </div>
        <div className='rules_information'>
          <Button
            className='rules_rectangle show-modal'
            onClick={() => setMostrarAd(true)}
          >
            Reglamento
          </Button>
          <div className='rules_circle show-modal'>i</div>
        </div>
      </div>
      <ModalReglamento
        mostrarAd={mostrarAd}
        setMostrarAd={setMostrarAd}
        contenido={<InformacionReglamento />}
      />
    </>
  )
}
