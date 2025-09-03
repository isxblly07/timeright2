-- Inserindo dados iniciais para teste

-- Serviços
INSERT INTO servico (nome, preco, duracao) VALUES ('Corte Masculino', 25.0, 30);
INSERT INTO servico (nome, preco, duracao) VALUES ('Corte Feminino', 45.0, 60);
INSERT INTO servico (nome, preco, duracao) VALUES ('Barba', 15.0, 20);
INSERT INTO servico (nome, preco, duracao) VALUES ('Manicure', 20.0, 45);

-- Profissionais
INSERT INTO profissional (nome, especialidade, telefone) VALUES ('Carlos Silva', 'Barbeiro', '(11) 99999-9999');
INSERT INTO profissional (nome, especialidade, telefone) VALUES ('Ana Santos', 'Cabeleireira', '(11) 88888-8888');
INSERT INTO profissional (nome, especialidade, telefone) VALUES ('Maria Costa', 'Manicure', '(11) 77777-7777');

-- Agendamentos
INSERT INTO agendamento (cliente, servico_id, profissional_id, data, hora, status) 
VALUES ('Maria Silva', 2, 2, CURRENT_DATE, '14:00:00', 'CONFIRMADO');

INSERT INTO agendamento (cliente, servico_id, profissional_id, data, hora, status) 
VALUES ('João Santos', 3, 1, CURRENT_DATE, '15:30:00', 'PENDENTE');

INSERT INTO agendamento (cliente, servico_id, profissional_id, data, hora, status) 
VALUES ('Ana Costa', 4, 3, CURRENT_DATE, '16:00:00', 'CANCELADO');

-- Promoções
INSERT INTO promocao (titulo, descricao, desconto, validade, ativa) 
VALUES ('Desconto de Verão', '20% off em cortes femininos', 20, '2024-02-29', true);

INSERT INTO promocao (titulo, descricao, desconto, validade, ativa) 
VALUES ('Combo Barba + Corte', 'Barba + Corte por R$ 35', 15, '2024-01-31', true);