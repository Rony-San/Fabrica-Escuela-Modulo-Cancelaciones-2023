import React from "react";

const Footer = () => {
  return (
    <div className="info">
      <div className="students_links">
        <ul>
          <li>
            <a href="#">
              <h4>Información Estudiantes</h4>
            </a>
          </li>
          <li>
            <a href="">Cancelación de materias</a>
          </li>

          <li>
            <a href="">Solicitudes de cancelación</a>
          </li>
        </ul>
      </div>
      <div className="teachers_links">
        <ul>
          <li>
            <a href="#">
              <h4>Información Profesores</h4>
            </a>
          </li>
          <li>
            <a href="">Solicitudes de estudiantes</a>
          </li>

          <li>
            <a href="">Menú profesores</a>
          </li>
        </ul>
      </div>
      <div className="more_info">
        <ul>
          <li>
            <a href="#">
              <h4>Más Información</h4>
            </a>
          </li>
          <li>
            <a href="">Acerca de la U de A</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
