import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NavLink } from 'react-router-dom'

const Asignaturas = () => {
  const asignaturas = [
    { nombre: 'Matemáticas', codigo: 'MAT101', grupo: '5' },
    { nombre: 'Historia', codigo: 'HIS201', grupo: '2' },
    { nombre: 'Ciencias de la Computación', codigo: 'CSC301', grupo: '1' }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  }
  return (
    <Slider {...settings} className='teacher_signatures'>
      {asignaturas.map((asignatura, _) => (
        <NavLink
          to={'/docenteRevisionCancelaciones'}
          key={asignatura.codigo}
          className='links'
        >
          <div className='slider_inner_block_teacher'>
            <h3>{asignatura.nombre}</h3>
            <h5>Código: {asignatura.codigo}</h5>
            <h5>Grupo: {asignatura.grupo}</h5>
          </div>
        </NavLink>
      ))}
    </Slider>
  )
}

export default Asignaturas
