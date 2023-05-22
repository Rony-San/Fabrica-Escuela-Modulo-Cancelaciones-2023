import React from "react";

import Navbar from "../../components/navBar/NavBar";
import Asignaturas from "../../components/componentesProfesores/Asignaturas";
import Footer from "../../components/Footer/Footer";
import MenuProfesores from "../../components/menu/MenuProfesores";
import DatosProfesorado from "../../components/cancelacionCurso/DatosProfesorado";
const DocentesCancelaciones = () => {
  return (
    <div className="body_cancelacion">
      <div className="bannerCancelacion">
        <Navbar usuario={"ESTUDIANTES"} />
        <div className="main_wrapper_form_cursos">
          <MenuProfesores />
          <div className="form">
            <DatosProfesorado />
            <Asignaturas></Asignaturas>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DocentesCancelaciones;
