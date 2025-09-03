import { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { dashboardAPI, agendamentosAPI } from '../services/api'

function Dashboard() {
  const [stats, setStats] = useState({
    agendamentosHoje: 0,
    servicosAtivos: 0,
    profissionais: 0,
    promocoesAtivas: 0
  })
  const [proximosAgendamentos, setProximosAgendamentos] = useState([])

  useEffect(() => {
    carregarDados()
  }, [])

  const carregarDados = async () => {
    try {
      const [statsRes, agendamentosRes] = await Promise.all([
        dashboardAPI.stats(),
        agendamentosAPI.listarHoje()
      ])
      setStats(statsRes.data)
      setProximosAgendamentos(agendamentosRes.data.slice(0, 3))
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    }
  }

  const statsCards = [
    { title: 'Agendamentos Hoje', value: stats.agendamentosHoje, color: 'var(--azul-pastel)', icon: '📅' },
    { title: 'Serviços Ativos', value: stats.servicosAtivos, color: 'var(--verde-suave)', icon: '✂️' },
    { title: 'Profissionais', value: stats.profissionais, color: 'var(--lilas-delicado)', icon: '👥' },
    { title: 'Promoções Ativas', value: stats.promocoesAtivas, color: 'var(--rosa-bebe)', icon: '🎯' }
  ]

  return (
    <>
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        {statsCards.map((stat, index) => (
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
              {proximosAgendamentos.length > 0 ? (
                proximosAgendamentos.map(agendamento => (
                  <div key={agendamento.id} className="d-flex justify-content-between align-items-center mb-2">
                    <span>{agendamento.cliente} - {agendamento.servico?.nome}</span>
                    <span className="text-muted">{agendamento.hora}</span>
                  </div>
                ))
              ) : (
                <p className="text-muted">Nenhum agendamento para hoje</p>
              )}
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