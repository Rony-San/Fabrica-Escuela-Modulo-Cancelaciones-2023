import React from "react";

export default function DatosEstudiante() {
  return (
    <>
      <div className="first_line_form">
        <div className="personal_information">
          <ul className="student_information">
            <li>
              <p>Fecha:</p>
              <span>...</span>
            </li>
            <li>
              <p>Estuadiante:</p>
              <span>...</span>
            </li>
            <li>
              <p>Programa:</p>
              <span>...</span>
            </li>
            <li>
              <p>Semestre:</p>
              <span>...</span>
            </li>
          </ul>
        </div>
        <div className="rules_information">
          <div className="rules_rectangle show-modal">Reglamento</div>
          <div className="rules_circle show-modal">i</div>
        </div>
      </div>
    </>
  );
}
