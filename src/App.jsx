import React, { useState } from 'react';
import img from './assets/biscoito.png';
import './App.css';

const App = () => {
  const [textoFrase, setTextoFrase] = useState('');

  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
  ];

  const quebraBiscoito = () => {
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(`" ${frases[numeroAleatorio]} "`);
  };

  return (
    <div className="container">
      <img className="img" src={img} alt="Biscoito da sorte" />
      <Botao nome="Abrir biscoito" acaoBtn={quebraBiscoito} />
      <h3 className="textoFrase">{textoFrase}</h3>
    </div>
  );
};

const Botao = ({ nome, acaoBtn }) => (
  <div>
    <button onClick={acaoBtn} className='botao'>{nome}</button>
  </div>
);

export default App;
