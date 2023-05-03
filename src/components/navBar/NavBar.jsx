import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar({usuario}) {
  return (
    <>
    <div className="navbar_cancelacion">
    <img src="Universidad_Logo.jpg" className="logo" alt="" />
    <h2>Universidad de Antioquia</h2>
    <ul>
      <li><NavLink to = '/login'>{usuario}</NavLink></li>
      <li>
        <a href=""><button>Salida Segura</button></a>
      </li>
    </ul>
  </div>
  <div className="navbar_cancelacion_line"></div>
  <div className="secondary_nav">
    <div className="first_e" id="first_e"><h4>Cancelación de curso</h4></div>
    <div className="second_e" id="second_e">
      <h4>Cancelación de semestre</h4>
    </div>
    <div className="third_e" id="third_e"><h4>Vida Acádemica</h4></div>
    <div className="forth_e" id="forth_e"><h4>Solicitudes Acádemicas</h4></div>
  </div>
  <div className="secondary_nav_line" id="second_line"></div>
  </>
  )
}
