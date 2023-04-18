import { Outlet } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='header__title'>Módulo de cancelaciones asdasdas</h1>
      </header>
      <Outlet />
    </div>
  )
}
