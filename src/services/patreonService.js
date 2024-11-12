import axios from 'axios';

const PATREON_API = 'https://www.patreon.com/api/oauth2/v2';

class PatreonService {
  constructor() {
    this.api = axios.create({
      baseURL: PATREON_API,
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_PATREON_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async getCampaignInfo() {
    try {
      const response = await this.api.get('/campaigns', {
        params: {
          'fields[campaign]': 'creation_name,discord_server_id,image_url,is_monthly,name,patron_count,summary'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter informações da campanha:', error);
      throw error;
    }
  }

  async getPosts() {
    try {
      const response = await this.api.get('/posts', {
        params: {
          'fields[post]': 'title,content,published_at,url',
          'sort': '-published_at',
          'page[count]': 10
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter posts:', error);
      throw error;
    }
  }

  async refreshToken() {
    try {
      const response = await axios.post(`${PATREON_API}/token`, {
        grant_type: 'refresh_token',
        refresh_token: import.meta.env.VITE_PATREON_REFRESH_TOKEN,
        client_id: import.meta.env.VITE_PATREON_CLIENT_ID,
        client_secret: import.meta.env.VITE_PATREON_CLIENT_SECRET
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar token:', error);
      throw error;
    }
  }
}

export const patreonService = new PatreonService();
