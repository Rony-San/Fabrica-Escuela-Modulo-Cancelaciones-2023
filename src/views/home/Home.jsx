import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [value, setValue] = useState(0)
  return (
    <div className='grid'>
      <h1>Home View</h1>
      <div>
        <h2>Value: {value}</h2>
        <div>
          <button onClick={() => setValue(value - 1)}>Decrement</button>
          <button onClick={() => setValue(value + 1)}>Increment</button>
        </div>
      </div>
      <div>
        <NavLink to='/default'>
          <button>Go to Default View</button>
        </NavLink>
        <NavLink to='/login'>
          <button>Go to Login View</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home
