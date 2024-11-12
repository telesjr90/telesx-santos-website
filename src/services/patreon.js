import axios from 'axios';

const PATREON_API_URL = process.env.VITE_PATREON_API_URL;
const PATREON_ACCESS_TOKEN = process.env.VITE_PATREON_ACCESS_TOKEN;

export const getPatreonContent = async () => {
  try {
    const response = await axios.get(PATREON_API_URL, {
      headers: {
        'Authorization': `Bearer ${PATREON_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar conteúdo do Patreon:', error);
    return null;
  }
};
