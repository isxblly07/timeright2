import { Navbar as BSNavbar, Nav, NavDropdown } from 'react-bootstrap'

function Navbar() {
  return (
    <BSNavbar expand="lg" className="navbar px-3">
      <BSNavbar.Brand href="/" style={{ fontFamily: 'Playfair Display', fontWeight: '600', color: '#333' }}>
        TimeRight ADM
      </BSNavbar.Brand>
      <BSNavbar.Toggle />
      <BSNavbar.Collapse className="justify-content-end">
        <Nav>
          <NavDropdown title="Admin" id="admin-dropdown">
            <NavDropdown.Item href="/configuracoes">Configurações</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  )
}

export default Navbar