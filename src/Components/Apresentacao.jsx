import React from 'react';
import styles from './css/Apresentacao.module.css';
import { ReactComponent as ImgFragmentoAbrir } from '../assets/icons/fragmento-abrir-preto.svg';
import { ReactComponent as ImgChaveAbrir } from '../assets/icons/chave-abrir.svg';
import foto from '../assets/perfil.jpg';
import { ReactComponent as ImgChaveFechar } from '../assets/icons/chave-fechar.svg';
import { ReactComponent as ImgFragmentoFechar } from '../assets/icons/fragmento-fechar-branco.svg';

const Apresentacao = () => {
  const titulo1Const = React.useRef();
  const titulo1Bryan = React.useRef();
  const titulo1Igual = React.useRef();
  const titulo2New = React.useRef();
  const titulo2Developer = React.useRef();
  const titulo2Parentese = React.useRef();

  const perfil = React.useRef();
  const texto = React.useRef();

  React.useEffect(() => {

    const titulo1ConstArray = titulo1Const.current.innerText.split('');
    const titulo1BryanArray = titulo1Bryan.current.innerText.split('');
    const titulo1IgualArray = titulo1Igual.current.innerText.split('');
    const titulo2NewArray = titulo2New.current.innerText.split('');
    const titulo2DeveloperArray = titulo2Developer.current.innerText.split('');
    const titulo2ParenteseArray = titulo2Parentese.current.innerText.split('');

    titulo1Const.current.innerText = '';
    titulo1Bryan.current.innerText = '';
    titulo1Igual.current.innerText = '';
    titulo2New.current.innerText = '';
    titulo2Developer.current.innerText = '';
    titulo2Parentese.current.innerText = '';

    titulo1ConstArray.forEach((letra, i) => {
      setTimeout(function () {
        titulo1Const.current.innerHTML += letra;
      }, 100 * i);
    });

    const intervalBryan = setInterval(function () {
      titulo1BryanArray.forEach((letra, i) => {
        setTimeout(function () {
          titulo1Bryan.current.innerHTML += letra;
        }, 100 * i);
        clearInterval(intervalBryan);
      });
    }, 400);

    const intervalIgual = setInterval(function () {
      titulo1IgualArray.forEach((letra, i) => {
        setTimeout(function () {
          titulo1Igual.current.innerHTML += letra;
        }, 100 * i);
        clearInterval(intervalIgual);
      });
    }, 800);

    const intervalNew = setInterval(function () {
      titulo2NewArray.forEach((letra, i) => {
        setTimeout(function () {
          titulo2New.current.innerHTML += letra;
        }, 100 * i);
        clearInterval(intervalNew);
      });
    }, 900);

    const intervalDeveloper = setInterval(function () {
      titulo2DeveloperArray.forEach((letra, i) => {
        setTimeout(function () {
          titulo2Developer.current.innerHTML += letra;
        }, 100 * i);
        clearInterval(intervalDeveloper);
      });
    }, 1100);

    const intervalParentese = setInterval(function () {
      titulo2ParenteseArray.forEach((letra, i) => {
        setTimeout(function () {
          titulo2Parentese.current.innerHTML += letra;
        }, 100 * i);
        clearInterval(intervalParentese);
      });

      perfil.current.classList.add('slowEnter');
      texto.current.classList.add('slowEnter');
      
    }, 1900);
  }, []);

  return (
    <div id={styles.apresentacao}>
      <div className={styles.fragmentoAbrir}>
        <ImgFragmentoAbrir />
      </div>
      <div className={styles.titulo} >
        <h1 className={styles.tituloPart1}>
          <span ref={titulo1Const} className={styles.const}>
            const
          </span>{' '}
          <span ref={titulo1Bryan} className={styles.bryan}>
            Bryan
          </span>{' '}
          <span ref={titulo1Igual} className={styles.igual}>
            =
          </span>
        </h1>
        <h1 className={styles.tituloPart2}>
          <span ref={titulo2New} className={styles.new}>
            new
          </span>
          <span ref={titulo2Developer} className={styles.developer}>
            Developer
          </span>
          <span ref={titulo2Parentese} className={styles.parenteses}>
            ()
          </span>
        </h1>
      </div>
      <div className={styles.chaveAbrir}>
        <ImgChaveAbrir />
      </div>
      <div ref={perfil} className={styles.perfil}>
        <img src={foto} alt="perfil" />
      </div>
      <p ref={texto} className={styles.texto}>
        "Olá! Meu nome é Bryan. Eu sou um Desenvolvedor FullStack."
      </p>
      <div className={styles.chaveFechar}>
        <ImgChaveFechar />
      </div>
      <div className={styles.fragmentoFechar}>
        <ImgFragmentoFechar />
      </div>
    </div>
  );
};

export default Apresentacao;
