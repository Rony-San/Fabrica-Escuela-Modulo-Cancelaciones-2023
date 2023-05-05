import React from 'react'
import Navbar from '../../components/navBar/NavBar'
import Menu from '../../components/menu/Menu'
import DatosEstudiante from '../../components/cancelacionCurso/DatosEstudiante'
import FormularioCancelacion from '../../components/cancelacionCurso/FormularioCancelacion'
import Footer from '../../components/Footer/Footer'

export default function CancelacionCurso() {
  return (
    <>
      <div className='body_cancelacion'>
        <div className='bannerCancelacion'>
          <Navbar usuario={'ESTUDIANTES'} />
          <div className='main_wrapper_form_cursos'>
            <Menu />
            <div className='form'>
              <DatosEstudiante />
              <FormularioCancelacion />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
