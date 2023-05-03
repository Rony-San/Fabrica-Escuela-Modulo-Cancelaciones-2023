import React from "react";
import Navbar from "../../components/navBar/NavBar";
import Menu from "../../components/menu/Menu";
import DatosEstudiante from "../../components/cancelacionCurso/DatosEstudiante";
import "./CancelacionCurso.css";
import FormularioCancelacion from "../../components/cancelacionCurso/FormularioCancelacion";

export default function CancelacionCurso() {
  return (
    <>
      <div className="bannerCancelacion">
        <Navbar usuario = {'ESTUDIANTES'} />
        <div className="main_wrapper">
          <Menu />
          <div className="form">
            <DatosEstudiante />
            <FormularioCancelacion />
          </div>
        </div>
      </div>
    </>
  );
}
