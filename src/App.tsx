import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import AuthContextProvider from './context/AuthContext'

function App() {
  
  return (
    <AuthContextProvider>
      <Router>
          <AppRoutes />
      </Router>
    </AuthContextProvider>
  )
}

export default App
