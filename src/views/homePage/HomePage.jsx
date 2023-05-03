import React from "react";
import {NavLink}from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="banner">
        <div className="desvanecido"></div>
        <div className="navbar_home">
          <img src="/Universidad_Logo.jpg" className="logo_home" alt="Banner" />
          <ul>
            <li>
              <NavLink to='/login'>Estudiantes</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Profesores</NavLink>
            </li>
            <li>
            <NavLink to='https://www.udea.edu.co'>Acerca de la UDEA</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <h1>UNIVERSIDAD DE ANTIOQUIA</h1>
        </div>
      </div>
    </>
  );
}
