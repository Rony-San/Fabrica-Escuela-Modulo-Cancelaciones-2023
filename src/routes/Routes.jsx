import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import ErrorPage from '../views/error/ErrorPage'
import Default from '../views/default/Default'
import Login from '../views/login/Login'
import HomePage from '../views/homePage/HomePage'
import CancelacionCurso from '../views/cancenlacionCurso/CancelacionCurso'
import CancelacionesPendientes from '../views/cancelacionesPendientes/CancelacionesPendientes'

import DocentesCancelaciones from '../views/docentesCancelaciones/DocentesCancelaciones'
import DocenteRevisionCancelaciones from '../views/docenteRevisionCancelaciones/DocenteRevisionCancelaciones'

export default function MainRoutes() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const role = useSelector((state) => state.auth.role)

  const isTeacher = () => {
      return isAuthenticated && role === 'teacher'
  }

  const isStudent = () => {
    return isAuthenticated && role === 'student'
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Navigate to='home' />} />
          <Route path='home' element={<HomePage />} />
          <Route path='default' element={<Default />} />
          <Route path='login' element={<Login />} />
          <Route
            path='cancelacionCurso'
            element={
              isStudent() ? <CancelacionCurso /> : <Navigate to='/home' />
            }
          />
          <Route
            path="docentesCancelaciones"
            element={
            isTeacher() ? <DocentesCancelaciones /> : <Navigate to='/home' />
          }
          />

          <Route
            path="cancelacionesPendientes"
            element={
              isStudent ? <CancelacionesPendientes /> : <Navigate to='/home' />
          }
          />
          <Route
            path="docenteRevisionCancelaciones/:idMateria"
            element={
              isTeacher ? <DocenteRevisionCancelaciones /> : <Navigate to='/home' />
          }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
