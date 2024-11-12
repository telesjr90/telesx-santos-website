import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { patreonService } from '../services/patreonService';

const PatreonCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        const code = searchParams.get('code');
        if (!code) {
          throw new Error('Código de autorização não encontrado');
        }

        const tokens = await patreonService.getTokens(code);
        // Salvar tokens no localStorage ou estado global
        localStorage.setItem('patreonTokens', JSON.stringify(tokens));
        
        // Redirecionar para a página principal
        navigate('/');
      } catch (error) {
        console.error('Erro no callback do Patreon:', error);
        navigate('/error');
      }
    };

    handleOAuthCallback();
  }, [searchParams, navigate]);

  return (
    <div className="patreon-callback">
      <h2>Processando login...</h2>
    </div>
  );
};

export default PatreonCallback;
