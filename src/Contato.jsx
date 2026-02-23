import React from 'react';

function Contato() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fffaf5', minHeight: '80vh' }}>
      <h1 style={{ color: '#FF8C00', fontSize: '42px', marginBottom: '20px' }}>
        Fale Conosco 🐾
      </h1>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
        <p style={{ fontSize: '18px', color: '#444', marginBottom: '30px' }}>
          Tire suas dúvidas ou agende um horário para o seu pet. Estamos prontos para te atender! 💛
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Seu Nome" 
            style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' }} 
          />
          <input 
            type="email" 
            placeholder="Seu E-mail" 
            style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' }} 
          />
          <textarea 
            placeholder="Como podemos ajudar o seu pet?" 
            rows="5" 
            style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px', resize: 'none' }}
          ></textarea>
          
          <button 
            type="submit" 
            style={{ backgroundColor: '#FF8C00', color: 'white', padding: '15px', borderRadius: '30px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', transition: '0.3s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e67e00'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#FF8C00'}
          >
            ENVIAR MENSAGEM
          </button>
        </form>

        <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px', color: '#666' }}>
          <p>📍 São Paulo</p>
          <p>📞 (11) 98184-9141</p>
          <p>📧 contato@petshopnininha.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contato;