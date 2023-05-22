import React from "react";

import Navbar from "../../components/navBar/NavBar";

import Footer from "../../components/Footer/Footer";
import MenuProfesores from "../../components/menu/MenuProfesores";
import DatosProfesorado from "../../components/cancelacionCurso/DatosProfesorado";
import CancelacionesPorAsignatura from "../../components/componentesProfesores/CancelacionesPorAsignatura";
const DocenteRevisionCancelaciones = () => {
  return (
    <div className="body_cancelacion">
      <div className="bannerCancelacion">
        <Navbar usuario={"ESTUDIANTES"} />
        <div className="main_wrapper_form_cursos">
          <MenuProfesores />
          <div className="form">
            <DatosProfesorado />
            <CancelacionesPorAsignatura />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DocenteRevisionCancelaciones;
