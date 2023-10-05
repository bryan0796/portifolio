import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import Apresentacao from './Components/Apresentacao';
import Sobre from './Components/Sobre';
import Conhecimentos from './Components/Conhecimentos';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Apresentacao />
        <Sobre />
        <Conhecimentos />
      </BrowserRouter>
    </div>
  )
}

export default App

