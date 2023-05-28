import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function FormularioCancelacion() {
  const userState = useSelector((state) => state.auth.user)

  const [materias, setMaterias] = useState([])
  const [idMateria, setIdMateria] = useState(null)
  const [motivo, setMotivo] = useState('')
  const [creditosTotales, setCreditosTotales] = useState(null)
  const [creditosACancelar, setCreditosACancelar] = useState(null)

  const cargarMaterias = async () => {
    return axios
      .get('http://localhost:8080/api/estudiante-materia/find-all-by-documento-estudiante/' +
        userState.documentoEstudiante)
      .then((response) => {
        setMaterias(response.data)
        //calcularCreditosTotales(response.data)
      })
  }

  useEffect(() => {
    cargarMaterias()
      .then((response) => {

      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if (materias.length > 0) {
      let aux = 0
      materias.map((curso) => {
        if (curso.estado === 'Cursando') {
          aux += parseInt(curso.materia.creditos)
        }
      })
      setCreditosTotales(aux)
    }
  }, [materias])

  const handleCheckboxChange = (event, key, creditos) => {
    const isChecked = event.target.checked
    if (isChecked) {
      setIdMateria(key)
      setCreditosACancelar(creditos)
    } else {
      setIdMateria(null)
      setCreditosACancelar(null)
    }
  }

  async function cancelacionCurso() {
    try {
      await axios
        .post('http://localhost:8080/api/solicitud-cancelacion/guardar-solicitud', {
          idMateria: idMateria,
          motivo: motivo,
          documentoEstudiante: userState.documentoEstudiante,
        })
        .then(
          (response) => {
            window.location.reload()
          },
          (fail) => {
            console.error(fail)
            window.alert('Ya existe una solicitud de cancelación para esta materia')
          }
        )
    } catch (error) {
      alert(error)
    }
  }

  const handleCancelacionCurso = (event) => {
    event.preventDefault()
    if (creditosTotales - parseInt(creditosACancelar) >= 8) {
      cancelacionCurso()
        .then(() => {
          console.log('Cancelación enviada')
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      window.alert('No hay suficientes creditos para cancelar esta materia')
    }
  }

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
              <th>Grupo</th>
              <th>% evaluado</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {materias.length > 0 &&
              materias.map((curso) => (
                <tr key={curso.materia.idMateria}>
                  <td>
                    <input
                      type='checkbox'
                      disabled={curso.estado == 'Cancelada'}
                      onChange={(event) =>
                        handleCheckboxChange(event, curso.materia.idMateria, curso.materia.creditos)
                      }
                      checked={idMateria === curso.materia.idMateria}
                    />
                  </td>
                  <td>{curso.materia.codigo}</td>
                  <td>{curso.materia.nombre}</td>
                  <td>{curso.materia.creditos}</td>
                  <td>{curso.grupo}</td>
                  <td>{curso.porcentajeEvaluado}</td>
                  <td>{curso.nota}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <textarea
          className='text-area'
          placeholder='Ingresa la Justificación.'
          required
          value={motivo}
          onChange={(event) => {
            setMotivo(event.target.value)
          }}
        ></textarea>
        <div className='button-container'>
          <button
            className='send-button'
            disabled={!idMateria}
            onClick={handleCancelacionCurso}
          >
            Enviar Cancelación
          </button>
        </div>
      </div>
    </>
  )
}
