import { useState } from 'react'
import { Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap'

function Servicos() {
  const [servicos, setServicos] = useState([
    { id: 1, nome: 'Corte Masculino', preco: 25, duracao: 30 },
    { id: 2, nome: 'Corte Feminino', preco: 45, duracao: 60 },
    { id: 3, nome: 'Barba', preco: 15, duracao: 20 }
  ])
  const [showModal, setShowModal] = useState(false)
  const [editingService, setEditingService] = useState(null)

  const handleSave = (service) => {
    if (editingService) {
      setServicos(servicos.map(s => s.id === editingService.id ? { ...service, id: editingService.id } : s))
    } else {
      setServicos([...servicos, { ...service, id: Date.now() }])
    }
    setShowModal(false)
    setEditingService(null)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Serviços</h1>
        <Button onClick={() => setShowModal(true)}>Novo Serviço</Button>
      </div>

      <Card style={{ background: 'var(--rosa-claro)' }}>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Duração (min)</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {servicos.map(servico => (
                <tr key={servico.id}>
                  <td>{servico.nome}</td>
                  <td>R$ {servico.preco}</td>
                  <td>{servico.duracao}</td>
                  <td>
                    <Button 
                      size="sm" 
                      variant="outline-primary" 
                      className="me-2"
                      onClick={() => {
                        setEditingService(servico)
                        setShowModal(true)
                      }}
                    >
                      Editar
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline-danger"
                      onClick={() => setServicos(servicos.filter(s => s.id !== servico.id))}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <ServiceModal 
        show={showModal}
        onHide={() => {
          setShowModal(false)
          setEditingService(null)
        }}
        onSave={handleSave}
        service={editingService}
      />
    </>
  )
}

function ServiceModal({ show, onHide, onSave, service }) {
  const [formData, setFormData] = useState(service || { nome: '', preco: '', duracao: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{service ? 'Editar' : 'Novo'} Serviço</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type="number"
              value={formData.preco}
              onChange={(e) => setFormData({...formData, preco: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Duração (minutos)</Form.Label>
            <Form.Control
              type="number"
              value={formData.duracao}
              onChange={(e) => setFormData({...formData, duracao: e.target.value})}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default Servicos