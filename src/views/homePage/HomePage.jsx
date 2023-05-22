import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HomePage() {
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
            <li>
              <NavLink to="/login">Estudiantes</NavLink>
            </li>
            <li>
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
                  <h3>Rony Santiago Bañol</h3>
                  <p>Jaime Andres Muñoz</p>
                </div>
              </div>
              <div className="card">
                <div className="card_background">ANÁLISIS 2</div>
                <h3 className="card_subject">2</h3>
                <div className="card-members">integrantes</div>
              </div>
              <div className="card">
                <div className="card_background">ARQUITECTURA</div>
                <h3 className="card_subject">2</h3>
                <div className="card-members">integrantes</div>
              </div>
              <div className="card">
                <div className="card_background">CALIDAD</div>
                <h3 className="card_subject">2</h3>
                <div className="card-members">integrantes</div>
              </div>
              <div className="card">
                <div className="card_background">color Xxx</div>
                <h3 className="card_subject">2</h3>
                <div className="card-members">integrantes</div>
              </div>
              <div className="card">
                <div className="card_background">color Xxx</div>
                <h3 className="card_subject">2</h3>
                <div className="card-members">integrantes</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
