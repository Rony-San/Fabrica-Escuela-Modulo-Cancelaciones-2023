import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="left_menu">
        <h3>Cancelaciones</h3>

        <NavLink className="register" to="/cancelacionCurso">
          Registar cancelaciones
        </NavLink>

        <NavLink className="pending" to="/cancelacionesPendientes">
          Cancelaciones Pendientes
        </NavLink>
      </div>
    </>
  );
}
