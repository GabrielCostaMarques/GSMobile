import axios from 'axios';

//atualizar com o seu ip
const API_URL = 'http://192.168.0.4:8080/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const listarTodasOngs = () => api.get('/ong/listarTodos');

export const cadastrarOngs = (data) => api.post('/ong/cadastrar', data);

export const atualizarOng = (id, data) => api.put(`/ong/${id}`, data);

export const removerOng = (id) => api.delete(`/ong/${id}`);