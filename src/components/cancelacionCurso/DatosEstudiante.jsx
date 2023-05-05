import React from "react";
import { useState } from "react";
import ModalReglamento from "../Modals/ModalReglamento";
import { Button } from "@mui/material";

export default function DatosEstudiante() {
  const [mostrarAd, setMostrarAd] = useState(false);
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
          <Button className="rules_rectangle show-modal" onClick={()=>setMostrarAd(true)}>Reglamento</Button>
          <div className="rules_circle show-modal">i</div>
        </div>
      </div>
      <ModalReglamento mostrarAd={mostrarAd} setMostrarAd={setMostrarAd} />
    </>
  );
}
