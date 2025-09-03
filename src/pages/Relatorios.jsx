import { Row, Col, Card, Table, Button } from 'react-bootstrap'

function Relatorios() {
  const relatorioVendas = [
    { mes: 'Janeiro', receita: 12450, agendamentos: 156 },
    { mes: 'Dezembro', receita: 10800, agendamentos: 142 },
    { mes: 'Novembro', receita: 11200, agendamentos: 148 }
  ]

  const servicosPopulares = [
    { servico: 'Corte Feminino', quantidade: 45, receita: 2025 },
    { servico: 'Corte Masculino', quantidade: 38, receita: 950 },
    { servico: 'Barba', quantidade: 32, receita: 480 }
  ]

  const exportToPDF = () => {
    alert('Exportação para PDF em desenvolvimento')
  }

  const exportToCSV = () => {
    alert('Exportação para CSV em desenvolvimento')
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Relatórios</h1>
        <div>
          <Button variant="outline-primary" className="me-2" onClick={exportToPDF}>
            Exportar PDF
          </Button>
          <Button variant="outline-success" onClick={exportToCSV}>
            Exportar CSV
          </Button>
        </div>
      </div>

      <Row>
        <Col md={6} className="mb-4">
          <Card style={{ background: 'var(--azul-pastel)' }}>
            <Card.Header>
              <h5>Receita por Mês</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Mês</th>
                    <th>Receita</th>
                    <th>Agendamentos</th>
                  </tr>
                </thead>
                <tbody>
                  {relatorioVendas.map((item, index) => (
                    <tr key={index}>
                      <td>{item.mes}</td>
                      <td>R$ {item.receita.toLocaleString()}</td>
                      <td>{item.agendamentos}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card style={{ background: 'var(--verde-suave)' }}>
            <Card.Header>
              <h5>Serviços Mais Populares</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Serviço</th>
                    <th>Quantidade</th>
                    <th>Receita</th>
                  </tr>
                </thead>
                <tbody>
                  {servicosPopulares.map((item, index) => (
                    <tr key={index}>
                      <td>{item.servico}</td>
                      <td>{item.quantidade}</td>
                      <td>R$ {item.receita}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card style={{ background: 'var(--lilas-delicado)' }}>
            <Card.Header>
              <h5>Resumo Geral</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={3} className="text-center">
                  <h3>R$ 34.450</h3>
                  <p>Receita Total (3 meses)</p>
                </Col>
                <Col md={3} className="text-center">
                  <h3>446</h3>
                  <p>Total de Agendamentos</p>
                </Col>
                <Col md={3} className="text-center">
                  <h3>R$ 77</h3>
                  <p>Ticket Médio</p>
                </Col>
                <Col md={3} className="text-center">
                  <h3>8</h3>
                  <p>Profissionais Ativos</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Relatorios