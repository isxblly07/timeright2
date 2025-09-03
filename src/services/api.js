import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
})

export const servicosAPI = {
  listar: () => api.get('/servicos'),
  criar: (data) => api.post('/servicos', data),
  atualizar: (id, data) => api.put(`/servicos/${id}`, data),
  deletar: (id) => api.delete(`/servicos/${id}`)
}

export const profissionaisAPI = {
  listar: () => api.get('/profissionais'),
  criar: (data) => api.post('/profissionais', data),
  atualizar: (id, data) => api.put(`/profissionais/${id}`, data),
  deletar: (id) => api.delete(`/profissionais/${id}`)
}

export const agendamentosAPI = {
  listar: () => api.get('/agendamentos'),
  listarHoje: () => api.get('/agendamentos/hoje'),
  criar: (data) => api.post('/agendamentos', data),
  atualizar: (id, data) => api.put(`/agendamentos/${id}`, data),
  deletar: (id) => api.delete(`/agendamentos/${id}`)
}

export const promocoesAPI = {
  listar: () => api.get('/promocoes'),
  criar: (data) => api.post('/promocoes', data),
  atualizar: (id, data) => api.put(`/promocoes/${id}`, data),
  deletar: (id) => api.delete(`/promocoes/${id}`)
}

export const dashboardAPI = {
  stats: () => api.get('/dashboard/stats')
}

export default api