// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const verificarCredenciais = async (usuario, senha) => {
  try {
    const resposta = await api.post('/login', {
      usuario,
      senha,
    });
    return resposta.data;
  } catch (erro) {
    console.error('Erro ao verificar credenciais:', erro);
    throw erro;
  }
};

export default api;