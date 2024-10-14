import React from 'react';
import logo from '../rhino.svg';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="Rhino AI Resources Logo" className="App-logo" />
      <h1>Introduction to AI</h1>
      <h2>Resource Pack</h2>
    </header>
  );
}

export default Header;