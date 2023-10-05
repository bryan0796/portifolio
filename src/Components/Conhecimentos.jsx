import React from 'react';
import style from './css/Conhecimentos.module.css';
import { ReactComponent as Figma } from '../assets/icons/figma.svg';
import { ReactComponent as Html } from '../assets/icons/html.svg';
import { ReactComponent as Css } from '../assets/icons/css3.svg';
import { ReactComponent as Javascript } from '../assets/icons/javascript.svg';
import { ReactComponent as Jquery } from '../assets/icons/jquery.svg';
import { ReactComponent as ReactSVG } from '../assets/icons/react.svg';
import { ReactComponent as Sql } from '../assets/icons/sql.svg';
import { ReactComponent as Php } from '../assets/icons/php.svg';

const Conhecimentos = () => {
  const [mudarCores, setMudarCores] = React.useState(false);

  const [corSvg, setCorSvg] = React.useState('#121212');
  const [corUl, setCorUl] = React.useState('#121212');
  const [corBackground, setCorBackground] = React.useState('#000');
  const [textBotao, setTextBotao] = React.useState('mostrar');
  const [textDisplay, setTextDisplay] = React.useState('none');

  const backgroundElement = React.useRef();
  const ulElement = React.useRef();
  const botaoElement = React.useRef();

  React.useEffect(() => {
    if (mudarCores === true) {
      setCorSvg('#004AA1');
      setCorUl('#A11C10');
      setCorBackground('#E0E0E0');
      setTextBotao('esconder');
      setTextDisplay('block');
    } else if (mudarCores === false) {
      setCorSvg('#121212');
      setCorUl('#121212');
      setCorBackground('#000');
      setTextBotao('mostrar');
      setTextDisplay('none');
    }
  }, [mudarCores]);

  React.useEffect(() => {
    if (ulElement.current) {
      ulElement.current.style.color = corUl;
    }
    if (backgroundElement.current) {
      backgroundElement.current.style.background = corBackground;
    }
    if (botaoElement.current) {
      botaoElement.current.innerText = textBotao;
    }
  }, [corUl, corBackground, textBotao]);

  function handleClick(e) {
    e.preventDefault();
    setMudarCores(!mudarCores);
  }

  return (
    <div id={style.conhecimentos}>
      <h1 className={style.titulo}>
        <span>Bryan</span>
        <span className={style.caracterTitulo}>.</span>
        <span>conhecimentos</span>
        <span>()</span>
      </h1>
      <div className={style.spanUl}>
        <span>&lt;ul style="display: {textDisplay};"&gt;</span>
      </div>
      <div ref={backgroundElement} className={style.tecnologiasBg}>
        <ul ref={ulElement} className={style.tecnologias}>
          <div>
            <li>
              <Figma stroke={corSvg} />
              Figma
            </li>
            <li>
              <Html fill={corSvg} />
              HTML
            </li>
            <li>
              <Css fill={corSvg} />
              CSS
            </li>
            <li>
              <Javascript fill={corSvg} />
              JavaScript
            </li>
          </div>
          <div>
            <li>
              <Jquery fill={corSvg} />
              Jquery
            </li>
            <li>
              <ReactSVG fill={corSvg} />
              React
            </li>
            <li>
              <Sql fill={corSvg} />
              SQL
            </li>
            <li>
              <Php fill={corSvg} />
              PHP
            </li>
          </div>
        </ul>
      </div>
      <div className={style.spanUl}>
        <span>&lt;/ul&gt;</span>
      </div>
      <div className={style.divBotao}>
        <span>&lt;button&gt;</span>
        <button ref={botaoElement} onClick={handleClick} className={style.botaoMostrar}>
        </button>
        <span>&lt;/button&gt;</span>
      </div>
    </div>
  );
};

export default Conhecimentos;
