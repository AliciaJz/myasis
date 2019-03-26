import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../simbolo_LBP.jpg';

function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>6to Congreso</p>
      <Link to="/clases">Clases</Link> | <Link to="/asistentes">Asistentes</Link>
    </header>
  )
}

export default Header