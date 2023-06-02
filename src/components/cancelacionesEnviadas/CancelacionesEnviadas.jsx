import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const CancelacionesEnviadas = () => {

  const [solicitudes, setSolicitudes] = useState([])
  const [idSolicitud, setIdSolicitud] = useState(null)
  const [estadoSolicitud, setEstadoSolicitud] = useState(null)

  const userState = useSelector((state) => state.auth.user)

  const eliminarSolicitud = async () => {
    return axios.delete('http://localhost:8080/api/solicitud-cancelacion/delete-by-idSolicitud/' + idSolicitud)
      .then((response) => window.location.reload()) //No se si esta sea la mejor forma de hacerlo
      .catch((error) => console.log(error))
  }

  const cargarSolicitudes = async () => {
    return axios
      .get('http://localhost:8080/api/solicitud-cancelacion/find-solicitud-por-documento-estudiante/' +
        userState.documentoEstudiante)
      .then((response) => {
        setSolicitudes(response.data)
      })
  }

  useEffect(() => {
    cargarSolicitudes()
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }, [])

  const handleEliminarSolicitud = (event, key) => {
    event.preventDefault()
    if (estadoSolicitud == 'Pendiente'){
      eliminarSolicitud()
        .then(() => {
          console.log('Petición enviada')
        })
        .catch((error) => {
          console.log(error)
        })

    } else {
      window.alert('No es posible cancelar una solicitud que ya ha sido aceptada o rechazada')
    }
  }

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

  return (
    <div class="secondary_form ">
      <h2>Historial de cancelaciones</h2>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Materia</th>
            <th>Apocope</th>
            <th>Justificación</th>
            <th>Estado</th>
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
                <td>{solicitud.estudianteMateria.materia.codigo}</td>
                <td>{solicitud.estudianteMateria.materia.nombre}</td>
                <td>{solicitud.justificacionCancelacion}</td>
                <td>{solicitud.estadoSolicitud}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div class="button-container-2">
        <button class="check-button">Ver Cancelación</button>

        <button class="delete-button" disabled={!idSolicitud} onClick={handleEliminarSolicitud}>Eliminar Solicitud</button>
      </div>
    </div>
  );
};

export default CancelacionesEnviadas;
