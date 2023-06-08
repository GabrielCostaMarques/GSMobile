import axios from 'axios';

// Atualize com o seu IP
export const API_URL = 'http://172.23.144.1:8080/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Doador Endpoints
export const atualizarDoador = (id, data) => api.put(`/doador/${id}`, data);
export const removerDoador = (id) => api.delete(`/doador/${id}`);

// Doação Endpoints
export const removerDoacao = (id) => api.delete(`/doacoes/${id}`);

export default api;