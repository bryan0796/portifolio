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

const defaultColors = {
  svg: '#121212',
  ul: '#121212',
  background: '#000',
};

const Conhecimentos = () => {
  const [mudarCores, setMudarCores] = React.useState(false);

  const [colors, setColors] = React.useState(defaultColors);
  const [textBotao, setTextBotao] = React.useState('mostrar');
  const [textDisplay, setTextDisplay] = React.useState('none');

  const backgroundElement = React.useRef();
  const ulElement = React.useRef();

  React.useEffect(() => {
    if (mudarCores === true) {
      setColors({
        svg: '#004AA1',
        ul: '#A11C10',
        background: '#E0E0E0',
      });
      setTextBotao('esconder');
      setTextDisplay('block');
    } else if (mudarCores === false) {
      setColors({
        svg: '#121212',
        ul: '#121212',
        background: '#000',
      });
      setTextBotao('mostrar');
      setTextDisplay('none');
    }
  }, [mudarCores]);

  React.useEffect(() => {
    if (ulElement.current) {
      ulElement.current.style.color = colors.ul;    }
    if (backgroundElement.current) {
      backgroundElement.current.style.background = colors.background;
    }
  }, [colors]);


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
      <div className={style.tagUl}>
        {'<ul style="display:' + textDisplay + ';">'}
      </div>
      <div ref={backgroundElement} className={style.tecnologiasBg}>
        <ul ref={ulElement} className={style.tecnologias}>
          <div>
            <li>
              <Figma stroke={colors.svg} />
              Figma
            </li>
            <li>
              <Html fill={colors.svg} />
              HTML
            </li>
            <li>
              <Css fill={colors.svg} />
              CSS
            </li>
            <li>
              <Javascript fill={colors.svg} />
              JavaScript
            </li>
          </div>
          <div>
            <li>
              <Jquery fill={colors.svg} />
              Jquery
            </li>
            <li>
              <ReactSVG fill={colors.svg} />
              React
            </li>
            <li>
              <Sql fill={colors.svg} />
              SQL
            </li>
            <li>
              <Php fill={colors.svg} />
              PHP
            </li>
          </div>
        </ul>
      </div>
      <div className={style.tagUl}>
        {'</ul>'}
      </div>
      <div className={style.divBotao}>
        <span>&lt;button&gt;</span>
        <button
          onClick={handleClick}
          className={style.botaoMostrar}
        >{textBotao}</button>
        <span>&lt;/button&gt;</span>
      </div>
    </div>
  );
};

export default Conhecimentos;
