import React from 'react';
import fotoBanho from './assets/banho.png'; 

function Banho() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fffaf5', minHeight: '80vh' }}>
      <h1 style={{ color: '#FF8C00', fontSize: '42px', marginBottom: '20px' }}>
        Banho & Tosa 🛁✨
      </h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'justify', lineHeight: '1.6', color: '#444' }}>
        {/* Ajustado para fontSize 20px */}
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF8C00', textAlign: 'center' }}>
          🐾 Cuidado, higiene e beleza para o seu melhor amigo.
        </p>

        {/* Ajustado para fontSize 18px para padronizar */}
        <p style={{ fontSize: '18px' }}>
          No nosso serviço de banho e tosa, cada detalhe é pensado para garantir o bem-estar, a saúde e a beleza do seu pet. 
          Trabalhamos com produtos de alta qualidade, técnicas adequadas para cada tipo de pelagem e, acima de tudo, muito carinho e respeito.
        </p>

        <p style={{ fontSize: '18px' }}>
          Sabemos que o momento do banho precisa ser tranquilo e seguro. Por isso, nossa equipe é treinada para oferecer 
          um atendimento cuidadoso, reduzindo o estresse e proporcionando uma experiência relaxante.
        </p>

        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '15px', marginTop: '30px' }}>
          <h3 style={{ color: '#FF8C00', marginBottom: '15px' }}>✂️ Nossos serviços incluem:</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '18px' }}>
            <li>✅ Banho com produtos específicos para cada tipo de pelo</li>
            <li>✅ Tosa higiênica, na tesoura ou máquina</li>
            <li>✅ Corte de unhas e limpeza de ouvidos</li>
            <li>✅ Escovação e finalização profissional</li>
            <li>✅ Verificação básica de saúde da pele</li>
          </ul>
        </div>

        <p style={{ marginTop: '30px', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
          Mais do que estética, o banho e tosa é uma questão de saúde e qualidade de vida. 
          Um pet limpo e bem cuidado é um pet mais feliz!
        </p>
        
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          Agende um horário e proporcione esse cuidado especial para quem faz seus dias mais alegres. 💛
        </p>
      </div>
      
      <img 
        src={fotoBanho} 
        alt="Pet tomando banho" 
        style={{ borderRadius: '20px', marginTop: '40px', width: '100%', maxWidth: '700px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      />
    </div>
  );
}

export default Banho;