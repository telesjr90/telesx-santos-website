import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Telefone</h4>
                <p>+55 (XX) XXXXX-XXXX</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>contato@telesxsantos.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Localização</h4>
                <p>São Paulo, Brasil</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-link"><i className="fab fa-patreon"></i></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Seu Nome" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Seu Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Assunto" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Sua Mensagem" rows="6" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
