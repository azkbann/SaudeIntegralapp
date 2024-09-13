// authService.js
const BASE_URL = 'http://localhost:3000/'; // Substitua pela URL base do seu backend

export async function Signin(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    if (!response.ok) {
      throw new Error('Falha ao realizar login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao conectar ao servidor:', error);
    throw error;
  }
}
