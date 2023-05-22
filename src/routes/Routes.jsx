import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import ErrorPage from '../views/error/ErrorPage'
import Default from '../views/default/Default'
import Login from '../views/login/Login'
import HomePage from '../views/homePage/HomePage'
import CancelacionCurso from '../views/cancenlacionCurso/CancelacionCurso'
import CancelacionesPendientes from '../views/cancelacionesPendientes/CancelacionesPendientes'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Navigate to='home' />} />
          <Route path='home' element={<HomePage />} />
          <Route path='default' element={<Default />} />
          <Route path='login' element={<Login />} />
          <Route path='cancelacionCurso' element={<CancelacionCurso />} />
          
          <Route
            path='cancelacionesPendientes'
            element={<CancelacionesPendientes />}
          />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
