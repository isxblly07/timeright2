import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import LoginAdmin from './pages/LoginAdmin'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Servicos from './pages/Servicos'
import Profissionais from './pages/Profissionais'
import Agendamentos from './pages/Agendamentos'
import Promocoes from './pages/Promocoes'
import Relatorios from './pages/Relatorios'
import Configuracoes from './pages/Configuracoes'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<LoginAdmin setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/" 
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="profissionais" element={<Profissionais />} />
          <Route path="agendamentos" element={<Agendamentos />} />
          <Route path="promocoes" element={<Promocoes />} />
          <Route path="relatorios" element={<Relatorios />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App