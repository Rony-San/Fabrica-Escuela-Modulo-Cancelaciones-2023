import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";

const CancelacionesPorAsignatura = () => {
  const [materias, setMaterias] = useState([]);

  const fetchData = async () => {
    return axios
      .get("http://localhost:8080/api/materia/find-all")
      .then((response) => {
        setMaterias(response.data);
      });
  };

  useEffect(() => {
    fetchData()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  //--------------------------------------

  //Envia los datos de una solicitud al backend
  const [idMateria, setIdMateria] = useState(null);
  const [motivo, setMotivo] = useState("");

  const handleCheckboxChange = (event, key) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setIdMateria(key);
    } else {
      setIdMateria(null);
    }
  };

  async function cancelacionCurso() {
    try {
      await axios
        .post("http://localhost:8080/api/cancel-courses-api", {
          idMateria: idMateria,
          motivo: motivo,
        })
        .then(
          (response) => {
            //toast.error('Usuario o contraseña incorrectos')
            console.log(response.data);
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (error) {
      alert(error);
    }
  }

  const handleCancelacionCurso = (event) => {
    event.preventDefault();
    cancelacionCurso()
      .then(() => {
        console.log("Cancelación enviada");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="cancellation_form cancellation_form_profesores">
      <h3>NOMBRE DE LA MATERIA</h3>
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Justificación</th>
            <th>% evaluado</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {materias.length > 0 &&
            materias.map((materia) => (
              <tr key={materia.idMateria}>
                <td>nombre estudiante</td>
                <td>Justificación</td>
                <td>60</td>
                <td>2.3</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CancelacionesPorAsignatura;
