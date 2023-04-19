import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from '../views/home/Home'
import ErrorPage from '../views/error/ErrorPage'
import Default from '../views/default/Default'
// import Header from '../views/layouts/header/Header'
import Login from '../views/login/Login'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Navigate to='default' />} />
          <Route path='home' element={<Home />} />
          <Route path='default' element={<Default />} />
          <Route path='login' element={ <Login /> } />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
