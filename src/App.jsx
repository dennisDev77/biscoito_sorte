import React, { useState } from 'react';
import img from './assets/biscoito.png';
import './App.css';
import gsap from 'gsap'

const App = () => {

  const anima=React.useRef()

  React.useEffect(()=>{
    gsap.fromTo(anima.current, {
      opacity:0,
        y:-200,
        
    },
      {   
        opacity:1,
         y:0,
         duration:2
      })

  }, [anima])

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
    <div className="container" ref={anima}>
      <img className="img" src={img} alt="Biscoito da sorte" />
      <Botao nome="Abrir biscoito" acaoBtn={quebraBiscoito} />

      <div >
      <h3 className="textoFrase">{textoFrase}</h3>
      </div>
    </div>
  );
};

const Botao = ({ nome, acaoBtn }) => (
  <div>
    <button onClick={acaoBtn} className='botao'>{nome}</button>
  </div>
);

export default App;
