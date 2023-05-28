import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const CancelacionesPorAsignatura = () => {
  const [solicitudes, setSolicitudes] = useState([])
  const [nombreMateria, setNombreMateria] = useState('')
  const [estadoSolicitud, setEstadoSolicitud] = useState(null)
  const [idSolicitud, setIdSolicitud] = useState(null)

  const { idMateria } = useParams()

  const userState = useSelector((state) => state.auth.user)

  const fetchData = async () => {
    return axios
      .get('http://localhost:8080/api/solicitud-cancelacion/find-solicitud-por-documento-profesor', {
        params: {
          idMateria: idMateria,
          documento: userState.documentoProfesor
        }
      })
      .then((response) => {
        setSolicitudes(response.data)
      })
      .catch((error) => { console.log(error) })
  }

  const actualizarEstadoSolicitud = async () => {
    try {
      return await axios
        .put('http://localhost:8080/api/solicitud-cancelacion/actualizar-estado', {
          estadoSolicitud: estadoSolicitud,
          idSolicitud: idSolicitud
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (solicitudes.length > 0) {
      setNombreMateria(solicitudes[0].estudianteMateria.materia.nombre)
    }
  }, [solicitudes])

  useEffect(() => {
    if (estadoSolicitud == 'Aceptada' || estadoSolicitud == 'Rechazada') {
      try {
        actualizarEstadoSolicitud()
      } catch (error) {
        console.log(error)
      }
    }
  }, [estadoSolicitud])

  useEffect(() => {
    fetchData()
      .then((response) => console.log())
      .catch((error) => console.log(error))
  }, [])

  const handleCheckboxChange = (event, key, estado) => {
    const isChecked = event.target.checked
    if (isChecked) {
      setIdSolicitud(key)
      setEstadoSolicitud(estado)
    } else {
      setIdSolicitud(null)
      setEstadoSolicitud(null)
    }
  }

  const handleAceptar = (event) => {
    event.preventDefault()
    if (estadoSolicitud == 'Pendiente') {
      setEstadoSolicitud('Aceptada')
    } else {
      window.alert("Esta solicitud ya ha sido aceptada o rechazada")
    }
  }

  const handleRechazar = (event) => {
    event.preventDefault()
    if (estadoSolicitud == 'Pendiente') {
      setEstadoSolicitud('Rechazada')
    } else {
      window.alert("Esta solicitud ya ha sido aceptada o rechazada")
    }
  }

  //<div className='cancellation_form cancellation_form_profesores'>
  return (
    <div class='secondary_form'>
      <h3>{nombreMateria}</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Estudiante</th>
            <th>Justificación</th>
            <th>% evaluado</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.length > 0 &&
            solicitudes.map((solicitud) => (
              <tr key={solicitud.idSolicitudCancelacion}>
                <td>
                  <input
                    type='checkbox'
                    onChange={(event) =>
                      handleCheckboxChange(event, solicitud.idSolicitudCancelacion, solicitud.estadoSolicitud)
                    }
                    checked={idSolicitud === solicitud.idSolicitudCancelacion}
                  />
                </td>
                <td>{solicitud.estudiante.nombre} {solicitud.estudiante.apellido}</td>
                <td>{solicitud.justificacionCancelacion}</td>
                <td>{solicitud.estudianteMateria.porcentajeEvaluado}</td>
                <td>{solicitud.estudianteMateria.nota}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div class="button-container-2">
        <button class="check-button" disabled={!idSolicitud} onClick={handleAceptar}>Aceptar</button>

        <button class="delete-button" disabled={!idSolicitud} onClick={handleRechazar}>Rechazar</button>
      </div>
    </div>
  )
}

export default CancelacionesPorAsignatura
