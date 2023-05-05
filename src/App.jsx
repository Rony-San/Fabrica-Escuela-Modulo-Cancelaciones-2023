import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './app/store'
import Routes from './routes/Routes'
import './views/cancenlacionCurso/CancelacionCurso.css'
import './views/login/Login.css'
import './views/homePage/HomePage.css'

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
  )
}

export default App
