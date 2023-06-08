import axios from 'axios';

// Atualize com o seu IP
export const API_URL = 'http://172.23.144.1:8080/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ONG Endpoints
export const listarTodasOngs = () => api.get('/ong/listarTodos');
export const cadastrarOngs = (data) => api.post('/ong/cadastrar', data);
export const atualizarOng = (id, data) => api.put(`/ong/${id}`, data);
export const removerOng = (id) => api.delete(`/ong/${id}`);

// Doador Endpoints
export const listarTodosDoadores = () => api.get('/doador/listar');
export const cadastrarDoador = (data) => api.post('/doador', data);
export const atualizarDoador = (id, data) => api.put(`/doador/${id}`, data);
export const buscarDoadorPorId = (id) => api.get(`/doador/${id}`);
export const removerDoador = (id) => api.delete(`/doador/${id}`);

// Doação Endpoints
export const listarTodasDoacoes = () => api.get('/doacoes');
export const cadastrarDoacao = (data) => api.post('/doacoes', data);
export const atualizarDoacao = (id, data) => api.put(`/doacoes/${id}`, data);
export const buscarDoacaoPorId = (id) => api.get(`/doacoes/${id}`);
export const removerDoacao = (id) => api.delete(`/doacoes/${id}`);

export default api;