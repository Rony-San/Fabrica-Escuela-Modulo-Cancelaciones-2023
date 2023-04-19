import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync
} from '../../app/features/counter/counterSlice'
import { NavLink } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Default.css'
import Logos from '../../components/default/Logos'

export default function Default() {
  const dispatch = useDispatch()
  const counterState = useSelector((state) => state.counter)
  return (
    <div>
      <h1>De aqui hacia abajo</h1>
      <Logos viteLogo={viteLogo} reactLogo={reactLogo} />
      <h1>Vite + React</h1>
      <div>
        <h2>Value: {counterState.value}</h2>
        {counterState.status === 'loading' && <h2>Loading...</h2>}
        <div className='card'>
          <button onClick={() => dispatch(incrementAsync(-1))}>
            Decrement Async
          </button>
          <button onClick={() => dispatch(incrementByAmount(-7))}>
            Decrement By 7
          </button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(incrementByAmount(7))}>
            Increment By 7
          </button>
          <button onClick={() => dispatch(incrementAsync(1))}>
            Increment Async
          </button>
        </div>
        <div className='card'>
          <NavLink to='/home'>
            <button>Go to Home View</button>
          </NavLink>
          <NavLink to='/login'>
            <button>Go to Login View</button>
          </NavLink>
        </div>
        <p>
          Edit <code>src/views/Home.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
