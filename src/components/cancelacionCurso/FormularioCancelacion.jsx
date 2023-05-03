import React from "react";
import './CancelacionCurso.css'

export default function FormularioCancelacion() {
  return (
    <>
      <div className="cancellation_form">
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
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td>Dato 5</td>
              <td>Dato 6</td>
              <td>Dato 7</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td>Dato 5</td>
              <td>Dato 6</td>
              <td>Dato 7</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td>Dato 5</td>
              <td>Dato 6</td>
              <td>Dato 7</td>
            </tr>
          </tbody>
        </table>
        <textarea
          className="text-area"
          placeholder="Ingresa la Justificación."
        ></textarea>
        <div className="button-container">
          <button className="send-button">Enviar Cancelación</button>
        </div>
      </div>
    </>
  );
}
