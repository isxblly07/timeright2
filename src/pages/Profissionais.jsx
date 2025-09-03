import { useState } from 'react'
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap'

function Profissionais() {
  const [profissionais, setProfissionais] = useState([
    { id: 1, nome: 'Carlos Silva', especialidade: 'Barbeiro', telefone: '(11) 99999-9999' },
    { id: 2, nome: 'Ana Santos', especialidade: 'Cabeleireira', telefone: '(11) 88888-8888' }
  ])
  const [showModal, setShowModal] = useState(false)
  const [editingProfessional, setEditingProfessional] = useState(null)

  const handleSave = (professional) => {
    if (editingProfessional) {
      setProfissionais(profissionais.map(p => p.id === editingProfessional.id ? { ...professional, id: editingProfessional.id } : p))
    } else {
      setProfissionais([...profissionais, { ...professional, id: Date.now() }])
    }
    setShowModal(false)
    setEditingProfessional(null)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Profissionais</h1>
        <Button onClick={() => setShowModal(true)}>Novo Profissional</Button>
      </div>

      <Row>
        {profissionais.map(profissional => (
          <Col md={4} key={profissional.id} className="mb-4">
            <Card style={{ background: 'var(--lilas-delicado)' }}>
              <Card.Body>
                <h5>{profissional.nome}</h5>
                <p className="text-muted mb-1">{profissional.especialidade}</p>
                <p className="text-muted mb-3">{profissional.telefone}</p>
                <div className="d-flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline-primary"
                    onClick={() => {
                      setEditingProfessional(profissional)
                      setShowModal(true)
                    }}
                  >
                    Editar
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline-danger"
                    onClick={() => setProfissionais(profissionais.filter(p => p.id !== profissional.id))}
                  >
                    Excluir
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <ProfessionalModal 
        show={showModal}
        onHide={() => {
          setShowModal(false)
          setEditingProfessional(null)
        }}
        onSave={handleSave}
        professional={editingProfessional}
      />
    </>
  )
}

function ProfessionalModal({ show, onHide, onSave, professional }) {
  const [formData, setFormData] = useState(professional || { nome: '', especialidade: '', telefone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton style={{ background: 'var(--verde-suave)' }}>
        <Modal.Title>{professional ? 'Editar' : 'Novo'} Profissional</Modal.Title>
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
            <Form.Label>Especialidade</Form.Label>
            <Form.Control
              value={formData.especialidade}
              onChange={(e) => setFormData({...formData, especialidade: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              value={formData.telefone}
              onChange={(e) => setFormData({...formData, telefone: e.target.value})}
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

export default Profissionais