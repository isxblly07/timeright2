import { useState } from 'react'
import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'

function Configuracoes() {
  const [config, setConfig] = useState({
    nomeEmpresa: 'TimeRight Salão',
    horarioAbertura: '08:00',
    horarioFechamento: '18:00',
    diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'],
    intervaloAgendamento: 30,
    notificacoes: true
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  const handleDayChange = (day) => {
    const newDays = config.diasFuncionamento.includes(day)
      ? config.diasFuncionamento.filter(d => d !== day)
      : [...config.diasFuncionamento, day]
    setConfig({...config, diasFuncionamento: newDays})
  }

  const dias = [
    { key: 'segunda', label: 'Segunda-feira' },
    { key: 'terca', label: 'Terça-feira' },
    { key: 'quarta', label: 'Quarta-feira' },
    { key: 'quinta', label: 'Quinta-feira' },
    { key: 'sexta', label: 'Sexta-feira' },
    { key: 'sabado', label: 'Sábado' },
    { key: 'domingo', label: 'Domingo' }
  ]

  return (
    <>
      <h1 className="mb-4">Configurações</h1>
      
      {showAlert && (
        <Alert variant="success">
          Configurações salvas com sucesso!
        </Alert>
      )}

      <Form onSubmit={handleSave}>
        <Row>
          <Col md={6}>
            <Card className="mb-4" style={{ background: 'var(--rosa-claro)' }}>
              <Card.Header>
                <h5>Informações Gerais</h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Nome da Empresa</Form.Label>
                  <Form.Control
                    value={config.nomeEmpresa}
                    onChange={(e) => setConfig({...config, nomeEmpresa: e.target.value})}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Horário de Abertura</Form.Label>
                  <Form.Control
                    type="time"
                    value={config.horarioAbertura}
                    onChange={(e) => setConfig({...config, horarioAbertura: e.target.value})}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Horário de Fechamento</Form.Label>
                  <Form.Control
                    type="time"
                    value={config.horarioFechamento}
                    onChange={(e) => setConfig({...config, horarioFechamento: e.target.value})}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Intervalo entre Agendamentos (minutos)</Form.Label>
                  <Form.Select
                    value={config.intervaloAgendamento}
                    onChange={(e) => setConfig({...config, intervaloAgendamento: e.target.value})}
                  >
                    <option value={15}>15 minutos</option>
                    <option value={30}>30 minutos</option>
                    <option value={60}>60 minutos</option>
                  </Form.Select>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4" style={{ background: 'var(--verde-suave)' }}>
              <Card.Header>
                <h5>Dias de Funcionamento</h5>
              </Card.Header>
              <Card.Body>
                {dias.map(dia => (
                  <Form.Check
                    key={dia.key}
                    type="checkbox"
                    label={dia.label}
                    checked={config.diasFuncionamento.includes(dia.key)}
                    onChange={() => handleDayChange(dia.key)}
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>

            <Card style={{ background: 'var(--lilas-delicado)' }}>
              <Card.Header>
                <h5>Notificações</h5>
              </Card.Header>
              <Card.Body>
                <Form.Check
                  type="switch"
                  label="Receber notificações por email"
                  checked={config.notificacoes}
                  onChange={(e) => setConfig({...config, notificacoes: e.target.checked})}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button type="submit" size="lg">
            Salvar Configurações
          </Button>
        </div>
      </Form>
    </>
  )
}

export default Configuracoes