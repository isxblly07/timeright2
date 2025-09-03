import { useState } from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'

function Agendamentos() {
  const [agendamentos] = useState([
    { id: 1, cliente: 'Maria Silva', servico: 'Corte Feminino', profissional: 'Ana Santos', data: '2024-01-15', hora: '14:00', status: 'confirmado' },
    { id: 2, cliente: 'João Santos', servico: 'Barba', profissional: 'Carlos Silva', data: '2024-01-15', hora: '15:30', status: 'pendente' },
    { id: 3, cliente: 'Ana Costa', servico: 'Manicure', profissional: 'Ana Santos', data: '2024-01-15', hora: '16:00', status: 'cancelado' },
    { id: 4, cliente: 'Pedro Lima', servico: 'Corte Masculino', profissional: 'Carlos Silva', data: '2024-01-16', hora: '10:00', status: 'confirmado' }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmado': return 'var(--verde-suave)'
      case 'pendente': return 'var(--azul-pastel)'
      case 'cancelado': return 'var(--rosa-bebe)'
      default: return 'var(--lilas-delicado)'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmado': return 'Confirmado'
      case 'pendente': return 'Pendente'
      case 'cancelado': return 'Cancelado'
      default: return status
    }
  }

  return (
    <>
      <h1 className="mb-4">Agendamentos</h1>
      
      <Row>
        {agendamentos.map(agendamento => (
          <Col md={6} lg={4} key={agendamento.id} className="mb-4">
            <Card style={{ background: 'var(--rosa-claro)' }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h6>{agendamento.cliente}</h6>
                  <Badge 
                    style={{ 
                      background: getStatusColor(agendamento.status),
                      color: '#333'
                    }}
                  >
                    {getStatusText(agendamento.status)}
                  </Badge>
                </div>
                <p className="mb-1"><strong>Serviço:</strong> {agendamento.servico}</p>
                <p className="mb-1"><strong>Profissional:</strong> {agendamento.profissional}</p>
                <p className="mb-1"><strong>Data:</strong> {new Date(agendamento.data).toLocaleDateString('pt-BR')}</p>
                <p className="mb-0"><strong>Hora:</strong> {agendamento.hora}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Agendamentos