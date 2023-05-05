import React from "react";
import Navbar from "../../components/navBar/NavBar";
import Menu from "../../components/menu/Menu";
import DatosEstudiante from "../../components/cancelacionCurso/DatosEstudiante";
import CancelacionesEnviadas from "../../components/cancelacionesEnviadas/CancelacionesEnviadas";
import Footer from "../../components/Footer/Footer";
const CancelacionesPendientes = () => {
  return (
    <div className="body_cancelacion">
      <div className="bannerCancelacion">
        <Navbar usuario={"ESTUDIANTES"} />
        <div className="main_wrapper_form_cursos">
          <Menu />
          <div className="form">
            <DatosEstudiante />
            <CancelacionesEnviadas />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CancelacionesPendientes;
