import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import style from './css/Header.module.css';

const Header = () => {
  return (
    <header className={style.header} >
      <nav className={style.nav}>
        <Link  to="/">
          {' '}
          <img className={style.logo} src={logo} alt="" />{' '}
        </Link>
        <ul className={style.itensMenu} >
          <Link>Sobre</Link>
          <Link>Conhecimentos</Link>
          <Link>Projetos</Link>
          <Link>Contato</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
