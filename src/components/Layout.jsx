import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <Sidebar />
          </Col>
          <Col md={10} className="p-4">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout