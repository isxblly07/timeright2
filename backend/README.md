# TimeRight ADM Backend

Backend Spring Boot para o sistema administrativo TimeRight.

## Tecnologias
- Spring Boot 3.2.0
- Spring Data JPA
- H2 Database (em memória)
- Java 17

## Executar
```bash
cd backend
./mvnw spring-boot:run
```

## APIs Disponíveis

### Base URL: `http://localhost:8080/api`

### Serviços
- `GET /servicos` - Listar todos
- `POST /servicos` - Criar novo
- `PUT /servicos/{id}` - Atualizar
- `DELETE /servicos/{id}` - Deletar

### Profissionais
- `GET /profissionais` - Listar todos
- `POST /profissionais` - Criar novo
- `PUT /profissionais/{id}` - Atualizar
- `DELETE /profissionais/{id}` - Deletar

### Agendamentos
- `GET /agendamentos` - Listar todos
- `GET /agendamentos/hoje` - Agendamentos de hoje
- `POST /agendamentos` - Criar novo
- `PUT /agendamentos/{id}` - Atualizar
- `DELETE /agendamentos/{id}` - Deletar

### Promoções
- `GET /promocoes` - Listar todas
- `POST /promocoes` - Criar nova
- `PUT /promocoes/{id}` - Atualizar
- `DELETE /promocoes/{id}` - Deletar

### Dashboard
- `GET /dashboard/stats` - Estatísticas gerais

## H2 Console
Acesse: `http://localhost:8080/api/h2-console`
- URL: `jdbc:h2:mem:timeright`
- User: `sa`
- Password: (vazio)