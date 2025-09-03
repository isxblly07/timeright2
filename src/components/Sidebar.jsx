import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/servicos', label: 'Serviços', icon: '✂️' },
    { path: '/profissionais', label: 'Profissionais', icon: '👥' },
    { path: '/agendamentos', label: 'Agendamentos', icon: '📅' },
    { path: '/promocoes', label: 'Promoções', icon: '🎯' },
    { path: '/relatorios', label: 'Relatórios', icon: '📈' },
    { path: '/configuracoes', label: 'Configurações', icon: '⚙️' }
  ]

  return (
    <div className="sidebar p-3">
      <Nav className="flex-column">
        {menuItems.map(item => (
          <Nav.Link 
            key={item.path}
            href={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <span className="me-2">{item.icon}</span>
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  )
}

export default Sidebar