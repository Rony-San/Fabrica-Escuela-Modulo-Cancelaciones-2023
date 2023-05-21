import React from "react";
import { NavLink } from "react-router-dom";

const MenuProfesores = () => {
  return (
    <div className="left_menu">
      <h3>Docente</h3>

      <NavLink className="register" to="/docentesCancelaciones">
        Materias Asignadas
      </NavLink>
    </div>
  );
};

export default MenuProfesores;
