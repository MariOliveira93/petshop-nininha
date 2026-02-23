import React, { useState } from 'react';
import './Carrossel.css';
import fotoCreche from './assets/creche.png'; 
import fotoHotel from './assets/hotel.png';

function Carrossel() {
  const [slideAtual, setSlideAtual] = useState(0);

  const slides = [
    {
      titulo: "Creche Animada",
      descricao: "Onde a diversão e o cuidado caminham juntos todos os dias.",
      imagem: fotoCreche
    },
    {
      titulo: "Hotel 5 Estrelas",
      descricao: "Conforto e segurança para o seu pet sentir-se em casa.",
      imagem: fotoHotel
    }
  ];

  const proximo = () => setSlideAtual((p) => (p === slides.length - 1 ? 0 : p + 1));
  const anterior = () => setSlideAtual((p) => (p === 0 ? slides.length - 1 : p - 1));

  return (
    <section className="carrossel-premium" style={{ backgroundImage: `url(${slides[slideAtual].imagem})` }}>
      <div className="overlay-escuro">
        <button className="seta-luxo esquerda" onClick={anterior}>❮</button>
        
        <div className="conteudo-luxo">
          <span className="badge-laranja">NOSSOS SERVIÇOS</span>
          <h2 className="titulo-luxo">{slides[slideAtual].titulo}</h2>
          <p className="desc-luxo">{slides[slideAtual].descricao}</p>
          
        </div>

        <button className="seta-luxo direita" onClick={proximo}>❯</button>
      </div>
    </section>
  );
}

export default Carrossel;