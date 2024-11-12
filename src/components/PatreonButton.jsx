import React from 'react';
import { patreonService } from '../services/patreonService';
import './PatreonButton.css';

const PatreonButton = () => {
  const handleLogin = async () => {
    try {
      const oauthUrl = await patreonService.getOAuthUrl();
      window.location.href = oauthUrl;
    } catch (error) {
      console.error('Erro ao iniciar login com Patreon:', error);
    }
  };

  return (
    <button className="patreon-button" onClick={handleLogin}>
      <img src="/images/patreon-logo.svg" alt="Patreon Logo" />
      Conectar com Patreon
    </button>
  );
};

export default PatreonButton;
