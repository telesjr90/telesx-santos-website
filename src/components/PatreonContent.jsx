import React, { useEffect, useState } from 'react';
import { patreonService } from '../services/patreonService';
import './PatreonContent.css';

const PatreonContent = () => {
  const [campaign, setCampaign] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPatreonContent = async () => {
      try {
        setLoading(true);
        const [campaignData, postsData] = await Promise.all([
          patreonService.getCampaignInfo(),
          patreonService.getPosts()
        ]);
        
        setCampaign(campaignData.data[0]);
        setPosts(postsData.data);
      } catch (error) {
        setError('Erro ao carregar conteúdo do Patreon');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadPatreonContent();
  }, []);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="patreon-content">
      {campaign && (
        <div className="campaign-info">
          <img src={campaign.attributes.image_url} alt={campaign.attributes.name} />
          <h2>{campaign.attributes.name}</h2>
          <p>{campaign.attributes.summary}</p>
          <div className="stats">
            <span>{campaign.attributes.patron_count} Patronos</span>
          </div>
        </div>
      )}

      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.attributes.title}</h3>
            <p>{post.attributes.content.substring(0, 150)}...</p>
            <a href={post.attributes.url} target="_blank" rel="noopener noreferrer">
              Ler mais
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatreonContent;
