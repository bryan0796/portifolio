import React from 'react';
import styles from './css/Sobre.module.css';
import { ReactComponent as ImgFragmentoAbrir } from '../assets/icons/fragmento-abrir-preto.svg';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div id={styles.sobre}>
      <div className="fragmentoAbrir">
        <ImgFragmentoAbrir />
      </div>

      <h1 className={styles.titulo}>
        <span>Bryan</span>
        <span>.</span>
        <span>sobre</span>
        <span>()</span>
      </h1>
      <div>
        <div className={styles.dados}>
          <p>nome:</p>
          <p>BRYAN DE PALMA MARTINS VIDA</p>
          <p>nascimento:</p>
          <p>07/03/1996</p>
          <p>escolaridade:</p>
          <p>GRADUAÇÃO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
          <p>cidade:</p>
          <p>IBIRITÉ - MG</p>
        </div>
        <div className={styles.informacoes}>
          <div className={styles.objetivos}>
            <h2 className={styles.subtitulo}>
              <span>console</span>
              <span>.</span>
              <span>log</span>
              <span>(objetivos)</span>
            </h2>
            <p>
              “Meu atual objetivo é me tornar um Desenvolvedor Web, e para isso
              além da graduação também tenho feito cursos de especialização em
              tecnologias de desenvolvimento.”
            </p>
          </div>
          <div className={styles.cursos}>
            <h2 className={styles.subtitulo}>console.log(cursos)</h2>
            <div className={styles.cursosLista}>
              <span>[</span>
              <ul>
                <li>"Lógica e Algoritmos",</li>
                <li>"UI Design",</li>
                <li>"HTML e CSS",</li>
                <li>"JavaScript",</li>
                <li>"Jquery",</li>
                <li>"React",</li>
                <li>"Banco de Dados",</li>
                <li>"PHP"</li>
              </ul>
              <span>]</span>
            </div>
          </div>
        </div>
        <div className={styles.github}>
          <h3>//meu github:</h3>
          <Link>&lt;a&gt;"clique aqui"&lt;/a&gt;</Link>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
