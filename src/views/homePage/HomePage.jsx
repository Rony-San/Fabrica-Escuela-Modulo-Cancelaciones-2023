import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { changeRole } from "../../app/features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();

  const handleEstudiante = () => {
    dispatch(changeRole({ role: "student" }));
  };

  const handleProfesor = () => {
    dispatch(changeRole({ role: "teacher" }));
  };

  const scrollToBottom = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 300,
  };

  return (
    <>
      <div className="banner">
        <div className="desvanecido"></div>
        <div className="navbar_home">
          <img src="/Universidad_Logo.jpg" className="logo_home" alt="Banner" />
          <ul>
            <li onClick={handleEstudiante}>
              <NavLink to="/login">Estudiantes</NavLink>
            </li>
            <li onClick={handleProfesor}>
              <NavLink to="/login">Profesores</NavLink>
            </li>
            <li>
              <NavLink to="https://www.udea.edu.co">Acerca de la UDEA</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <h1>UNIVERSIDAD DE ANTIOQUIA</h1>
        </div>
      </div>
      <footer className="footer_Information" onClick={scrollToBottom}>
        <h3>Más información</h3>
      </footer>
      <div className="more_information">
        <div className="project_information">
          <div className="wrapper_first_line">
            <div className="project_mision">
              <h1>Cancelaciones - Fabrica Escuela</h1>
              <p>
                El módulo de cancelaciones tiene como finalidad el desarrollo de
                una aplicación web que permita la gestión de las cancelaciones
                de cursos en el sistema académico de la universidad de
                Antioquia. Para lograrlo, se dispone de un equipo de desarrollo
                compuesto por estudiantes del programa de ingeniería de sistemas
                y de diferentes asignaturas, estratégicamente seleccionadas, con
                el propósito de crear un producto íntegro y que satisfaga los
                requisitos de un proceso de cancelación.
              </p>
            </div>
            <div className="floating_logo">
              <div className="floating_logo">
                <img
                  src="/logo_flot.png"
                  alt="Logo"
                  className="logo_animation"
                />
              </div>
            </div>
          </div>
          <div className="project_members">
            <Slider {...settings}>
              <div className="card">
                <div className="card_background">ANÁLISIS 1</div>
                <h3 className="card_subject">Front-end</h3>
                <div className="card-members">
                  <p>Rony Santiago Bañol</p>
                  <p>Jaime Andres Muñoz</p>
                  <p>Jhona Sebastian Henao</p>
                  <p>Alejandro Becerra</p>
                </div>
              </div>
              <div className="card">
                <div className="card_background">ANÁLISIS 2</div>
                <h3 className="card_subject">Back-end</h3>
                <div className="card-members">
                  <p>Juan Felipe Rendón</p>
                  <p>Danilo Tovar</p>
                  <p>Juan Rivera</p>
                  <p>Sara Lorena</p>
                </div>
              </div>
              <div className="card">
                <div className="card_background">CALIDAD</div>
                <h3 className="card_subject"></h3>
                <div className="card-members">
                  <p>Jeison David Moncado</p>
                  <p>Jhonatan Tamayo</p>
                  <p>Kieffer Paez</p>
                </div>
              </div>
              <div className="card">
                <div className="card_background">BASES DE DATOS</div>
                <h3 className="card_subject"></h3>
                <div className="card-members">
                  <p>Samuel David Montoya</p>
                  <p>Daniel Tabares</p>
                </div>
              </div>
              <div className="card">
                <div className="card_background">ARQUITECTURA</div>
                <h3 className="card_subject"></h3>
                <div className="card-members">
                  <p>Yeison Alexander Córdoba</p>
                </div>
              </div>
              <div className="card">
                <div className="card_background">SCRUM MASTER</div>
                <h3 className="card_subject"></h3>
                <div className="card-members">
                  <p>Mateo Álvarez Madrigal</p>
                  <p>Steven Alipio Berrio</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
