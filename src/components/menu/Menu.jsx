import React from "react";
import '../cancelacionCurso/CancelacionCurso.css'
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
    <div className="left_menu">
      <h3>Cancelaciones</h3>
      <NavLink className="register">Registar cancelaciones</NavLink>
      <p></p>
      <NavLink className="pending">Cancelaciones Pendientes</NavLink>
    </div>
    </>
  );
}
