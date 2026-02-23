import React from 'react';
import fotoCreche from './assets/creche.png'; 

function Creche() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fffaf5', minHeight: '80vh' }}>
      <h1 style={{ color: '#FF8C00', fontSize: '42px', marginBottom: '20px' }}>
        Nossa Creche Animada 🐾
      </h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'justify', lineHeight: '1.6', color: '#444' }}>
        {/* Padronizado para 20px como no Banho & Tosa */}
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF8C00', textAlign: 'center' }}>
          🐾 Um espaço de cuidado, diversão e carinho para o seu melhor amigo.
        </p>

        {/* Padronizado para 18px para o corpo do texto */}
        <p style={{ fontSize: '18px' }}>
          Na nossa creche de cachorro, oferecemos muito mais do que um lugar para o seu pet passar o dia. 
          Proporcionamos um ambiente seguro, supervisionado e cheio de estímulos positivos, onde cada cão é tratado com amor, respeito e atenção individual.
        </p>

        <p style={{ fontSize: '18px' }}>
          Contamos com uma equipe preparada e apaixonada por animais, sempre atenta ao bem-estar físico e emocional de cada hóspede. 
          Nossa rotina inclui momentos de socialização, atividades recreativas, descanso supervisionado e acompanhamento constante.
        </p>

        <p style={{ fontSize: '18px' }}>
          Sabemos que cada cachorro é único. Por isso, respeitamos o porte, a personalidade e as necessidades específicas de cada um, 
          garantindo uma experiênca tranquila, divertida e segura.
        </p>

        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '15px', marginTop: '30px' }}>
          <h3 style={{ color: '#FF8C00', marginBottom: '15px' }}>🐶 Benefícios da creche:</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '18px' }}>
            <li>✅ Redução de ansiedade e estresse</li>
            <li>✅ Desenvolvimento da socialização</li>
            <li>✅ Estímulo físico e mental</li>
            <li>✅ Rotina equilibrada</li>
            <li>✅ Muito carinho e atenção</li>
          </ul>
        </div>

        <p style={{ marginTop: '30px', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
          Aqui, seu melhor amigo faz novos amigos, gasta energia de forma saudável e volta para casa feliz!
        </p>
        
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          Entre em contato e venha conhecer nosso espaço. Será um prazer cuidar de quem você ama. 💛
        </p>
      </div>
      
      <img 
        src={fotoCreche} 
        alt="Pet brincando" 
        style={{ borderRadius: '20px', marginTop: '40px', width: '100%', maxWidth: '700px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      />
    </div>
  );
}

export default Creche;