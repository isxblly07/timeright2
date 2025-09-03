import { useState, useEffect } from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import { agendamentosAPI } from '../services/api'

function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([])

  useEffect(() => {
    carregarAgendamentos()
  }, [])

  const carregarAgendamentos = async () => {
    try {
      const response = await agendamentosAPI.listar()
      setAgendamentos(response.data)
    } catch (error) {
      console.error('Erro ao carregar agendamentos:', error)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'CONFIRMADO': return 'var(--verde-suave)'
      case 'PENDENTE': return 'var(--azul-pastel)'
      case 'CANCELADO': return 'var(--rosa-bebe)'
      default: return 'var(--lilas-delicado)'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'CONFIRMADO': return 'Confirmado'
      case 'PENDENTE': return 'Pendente'
      case 'CANCELADO': return 'Cancelado'
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
                <p className="mb-1"><strong>Serviço:</strong> {agendamento.servico?.nome}</p>
                <p className="mb-1"><strong>Profissional:</strong> {agendamento.profissional?.nome}</p>
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