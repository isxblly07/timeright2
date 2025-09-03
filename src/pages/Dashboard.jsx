import { Row, Col, Card } from 'react-bootstrap'

function Dashboard() {
  const stats = [
    { title: 'Agendamentos Hoje', value: '24', color: 'var(--azul-pastel)', icon: '📅' },
    { title: 'Serviços Ativos', value: '12', color: 'var(--verde-suave)', icon: '✂️' },
    { title: 'Profissionais', value: '8', color: 'var(--lilas-delicado)', icon: '👥' },
    { title: 'Promoções Ativas', value: '3', color: 'var(--rosa-bebe)', icon: '🎯' }
  ]

  return (
    <>
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        {stats.map((stat, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card style={{ background: stat.color, border: 'none' }}>
              <Card.Body className="text-center">
                <div style={{ fontSize: '2rem' }}>{stat.icon}</div>
                <h3 className="mt-2">{stat.value}</h3>
                <p className="mb-0">{stat.title}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Row className="mt-4">
        <Col md={6}>
          <Card style={{ background: 'var(--rosa-claro)' }}>
            <Card.Header>
              <h5>Próximos Agendamentos</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span>Maria Silva - Corte</span>
                <span className="text-muted">14:00</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span>João Santos - Barba</span>
                <span className="text-muted">15:30</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>Ana Costa - Manicure</span>
                <span className="text-muted">16:00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card style={{ background: 'var(--rosa-pessego)' }}>
            <Card.Header>
              <h5>Receita do Mês</h5>
            </Card.Header>
            <Card.Body>
              <h2>R$ 12.450,00</h2>
              <p className="text-success mb-0">↗ +15% em relação ao mês anterior</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard