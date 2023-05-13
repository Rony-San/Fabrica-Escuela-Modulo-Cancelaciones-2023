import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function FormularioCancelacion() {

  const [materias, setMaterias] = useState([])

  const fetchData = () => {
    return axios.get('http://localhost:8080/api/materia/find-all')
      .then((response) => {
        setMaterias(response.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='cancellation_form'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Materia</th>
              <th>Apocope</th>
              <th>Creditos</th>
              <th>Grupos</th>
              <th>Correquisitos</th>
              <th>% evaluado</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {
              materias.map(materia => (
                <tr key={materia.idMateria}>
                  <td>
                    <input type='checkbox' />
                  </td>
                  <td>{materia.nombre}</td>
                  <td>202568</td>
                  <td>{materia.creditos}</td>
                  <td>05</td>
                  <td>NA</td>
                  <td>60</td>
                  <td>2.3</td>
                </tr>
              ))
            }
            
          </tbody>
        </table>
        <textarea
          className='text-area'
          placeholder='Ingresa la Justificación.'
        ></textarea>
        <div className='button-container'>
          <button className='send-button'>Enviar Cancelación</button>
        </div>
      </div>
    </>
  )
}
