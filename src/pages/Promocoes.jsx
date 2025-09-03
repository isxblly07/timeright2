import { useState } from 'react'
import { Row, Col, Card, Button, Modal, Form, Badge } from 'react-bootstrap'

function Promocoes() {
  const [promocoes, setPromocoes] = useState([
    { id: 1, titulo: 'Desconto de Verão', descricao: '20% off em cortes femininos', desconto: 20, validade: '2024-02-29', ativa: true },
    { id: 2, titulo: 'Combo Barba + Corte', descricao: 'Barba + Corte por R$ 35', desconto: 15, validade: '2024-01-31', ativa: true }
  ])
  const [showModal, setShowModal] = useState(false)
  const [editingPromo, setEditingPromo] = useState(null)

  const handleSave = (promo) => {
    if (editingPromo) {
      setPromocoes(promocoes.map(p => p.id === editingPromo.id ? { ...promo, id: editingPromo.id } : p))
    } else {
      setPromocoes([...promocoes, { ...promo, id: Date.now() }])
    }
    setShowModal(false)
    setEditingPromo(null)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Promoções</h1>
        <Button onClick={() => setShowModal(true)}>Nova Promoção</Button>
      </div>

      <Row>
        {promocoes.map(promocao => (
          <Col md={6} key={promocao.id} className="mb-4">
            <Card style={{ background: 'var(--rosa-pessego)' }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5>{promocao.titulo}</h5>
                  <Badge bg={promocao.ativa ? 'success' : 'secondary'}>
                    {promocao.ativa ? 'Ativa' : 'Inativa'}
                  </Badge>
                </div>
                <p className="mb-2">{promocao.descricao}</p>
                <p className="mb-2"><strong>Desconto:</strong> {promocao.desconto}%</p>
                <p className="mb-3"><strong>Válida até:</strong> {new Date(promocao.validade).toLocaleDateString('pt-BR')}</p>
                <div className="d-flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline-primary"
                    onClick={() => {
                      setEditingPromo(promocao)
                      setShowModal(true)
                    }}
                  >
                    Editar
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline-danger"
                    onClick={() => setPromocoes(promocoes.filter(p => p.id !== promocao.id))}
                  >
                    Excluir
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <PromoModal 
        show={showModal}
        onHide={() => {
          setShowModal(false)
          setEditingPromo(null)
        }}
        onSave={handleSave}
        promo={editingPromo}
      />
    </>
  )
}

function PromoModal({ show, onHide, onSave, promo }) {
  const [formData, setFormData] = useState(promo || { titulo: '', descricao: '', desconto: '', validade: '', ativa: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton style={{ background: 'var(--rosa-bebe)' }}>
        <Modal.Title>{promo ? 'Editar' : 'Nova'} Promoção</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              value={formData.titulo}
              onChange={(e) => setFormData({...formData, titulo: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.descricao}
              onChange={(e) => setFormData({...formData, descricao: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Desconto (%)</Form.Label>
            <Form.Control
              type="number"
              value={formData.desconto}
              onChange={(e) => setFormData({...formData, desconto: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Válida até</Form.Label>
            <Form.Control
              type="date"
              value={formData.validade}
              onChange={(e) => setFormData({...formData, validade: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Check
            type="checkbox"
            label="Promoção ativa"
            checked={formData.ativa}
            onChange={(e) => setFormData({...formData, ativa: e.target.checked})}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default Promocoes