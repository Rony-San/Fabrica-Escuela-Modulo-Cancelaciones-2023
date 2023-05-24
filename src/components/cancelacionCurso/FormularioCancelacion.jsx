import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function FormularioCancelacion() {
  //Carga las materias de un estudiante
  const [materias, setMaterias] = useState([])

  //Cambiar ruta por una funcional
  const fetchData = async () => {
    return axios
      .get('http://localhost:8080/api/materia/find-one/M001')
      .then((response) => {
        setMaterias(response.data)
      })
  }

  useEffect(() => {
    fetchData()
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }, [])
  //--------------------------------------

  //Envia los datos de una solicitud al backend
  const [idMateria, setIdMateria] = useState(null)
  const [motivo, setMotivo] = useState('')
  const userState = useSelector((state) => state.auth.user)
  console.log(useSelector((state) => state.auth.isAuthenticated))

  const handleCheckboxChange = (event, key) => {
    const isChecked = event.target.checked
    if (isChecked) {
      setIdMateria(key)
    } else {
      setIdMateria(null)
    }
  }

  async function cancelacionCurso() {
    try {
      await axios
        .post('http://localhost:8080/api/solicitud-cancelaciones/save', {
          idMateria: idMateria,
          motivo: motivo,
          user: userState.usuarioInstitucional
        })
        .then(
          (response) => {
            console.log(response.data)
          },
          (fail) => {
            console.error(fail)
          }
        )
    } catch (error) {
      alert(error)
    }
  }

  const handleCancelacionCurso = (event) => {
    event.preventDefault()
    cancelacionCurso()
      .then(() => {
        console.log('Cancelación enviada')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  //--------------------------------------

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
            {materias.length > 0 &&
              materias.map((materia) => (
                <tr key={materia.idMateria}>
                  <td>
                    <input
                      type='checkbox'
                      onChange={(event) =>
                        handleCheckboxChange(event, materia.idMateria)
                      }
                      checked={idMateria === materia.idMateria}
                    />
                  </td>
                  <td>202568</td>
                  <td>{materia.nombre}</td>
                  <td>{materia.creditos}</td>
                  <td>05</td>
                  <td>NA</td>
                  <td>60</td>
                  <td>2.3</td>
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
