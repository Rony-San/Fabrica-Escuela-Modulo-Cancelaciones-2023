import { NavLink } from 'react-router-dom'
export default function ErrorPage() {
  return (
    <div className='grid'>
      <h1>Oops!</h1>
      <p>Page not found</p>
      <NavLink to='/default'>
        <button>Go to Default View</button>
      </NavLink>
      <NavLink to='/home'>
        <button>Go to Home View</button>
      </NavLink>
    </div>
  )
}
