import React from 'react'
import { useState, useEffect } from 'react'
import ModalReglamento from '../Modals/ModalReglamento'
import { Button } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function DatosEstudiante() {
  const [mostrarAd, setMostrarAd] = useState(false)

  //Consumo de la Api-rest
  const [usuario, setUsuario] = useState([])
  const { user } = useParams()

  const fetchData = async () => {
    return axios
      .get(
        'http://localhost:8080/api/estudiante/find-estudiante-by-usuario/' +
          user
      )
      .then((response) => {
        setUsuario(response.data)
      })
  }

  useEffect(() => {
    fetchData()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

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
              <p>Estuadiante:</p>
              <span>
                {usuario.nombre} {usuario.apellido}
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
      <ModalReglamento mostrarAd={mostrarAd} setMostrarAd={setMostrarAd} />
    </>
  )
}
