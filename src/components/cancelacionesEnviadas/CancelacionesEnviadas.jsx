import React from 'react'

const CancelacionesEnviadas = () => {
  return (
    <div class='secondary_form '>
      <h2>Historial de cancelaciones</h2>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Materia</th>
            <th>Apocope</th>
            <th>Justificación</th>
            <th>Aprobado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
            <td>Dato 4</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
            <td>Dato 4</td>
          </tr>
        </tbody>
      </table>

      <div class='button-container-2'>
        <button class='check-button'>Enviar Cancelación</button>

        <button class='delete-button'>Enviar Cancelación</button>
      </div>
    </div>
  )
}

export default CancelacionesEnviadas
