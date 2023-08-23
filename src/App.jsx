import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import Apresentacao from './Components/Apresentacao';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Apresentacao />
      </BrowserRouter>
    </div>
  )
}

export default App

