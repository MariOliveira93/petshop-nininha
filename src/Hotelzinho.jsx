import React from 'react';
import fotoHotel from './assets/hotel.png'; 

function Hotelzinho() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fffaf5', minHeight: '80vh' }}>
      <h1 style={{ color: '#FF8C00', fontSize: '42px', marginBottom: '20px' }}>
        Hotel 5 Estrelas 🐾
      </h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'justify', lineHeight: '1.6', color: '#444' }}>
        {/* Padronizado para 20px como nas outras páginas */}
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF8C00', textAlign: 'center' }}>
          🐾 Conforto, segurança e carinho enquanto você viaja.
        </p>

        {/* Padronizado para 18px para o corpo do texto */}
        <p style={{ fontSize: '18px' }}>
          No nosso hotelzinho pet, seu melhor amigo é recebido com todo o cuidado, atenção e amor que ele merece. 
          Sabemos o quanto é difícil ficar longe do seu companheiro, por isso oferecemos um ambiente acolhedor, 
          seguro e supervisionado 24 horas por dia.
        </p>

        <p style={{ fontSize: '18px' }}>
          Aqui, cada pet tem uma rotina equilibrada, com momentos de recreação, socialização, descanso e acompanhamento individual. 
          Respeitamos a personalidade, os hábitos e as necessidades específicas de cada hóspede, garantindo uma estadia tranquila e feliz.
        </p>

        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '15px', marginTop: '30px' }}>
          <h3 style={{ color: '#FF8C00', marginBottom: '15px' }}>🏨 O que oferecemos:</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '18px' }}>
            <li>✅ Acomodações confortáveis e higienizadas</li>
            <li>✅ Monitoramento constante 24h</li>
            <li>✅ Atividades recreativas e enriquecimento ambiental</li>
            <li>✅ Alimentação conforme orientação do tutor</li>
            <li>✅ Muito carinho e atenção personalizada</li>
          </ul>
        </div>

        <p style={{ marginTop: '30px', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
          Nosso compromisso é proporcionar uma experiência segura e agradável para o seu pet, 
          para que você viaje com tranquilidade e confiança.
        </p>
        
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          Entre em contato e agende uma visita. Será um prazer cuidar do seu melhor amigo! 💛
        </p>
      </div>
      
      <img 
        src={fotoHotel} 
        alt="Pet no hotel" 
        style={{ borderRadius: '20px', marginTop: '40px', width: '100%', maxWidth: '700px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      />
    </div>
  );
}

export default Hotelzinho;