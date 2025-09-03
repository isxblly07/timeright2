import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'

function LoginAdmin({ setIsAuthenticated }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (credentials.email === 'admin@timeright.com' && credentials.password === 'admin123') {
      setIsAuthenticated(true)
    } else {
      setError('Credenciais inválidas')
    }
  }

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <Card className="p-4" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: '#333' }}>TimeRight ADM</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    required
                  />
                </Form.Group>
                <Button type="submit" className="w-100 btn-primary">
                  Entrar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginAdmin