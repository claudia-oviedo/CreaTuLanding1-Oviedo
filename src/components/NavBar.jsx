// src/components/NavBar.jsx
import React from 'react';
// ➡️ CORRECCIÓN: Ruta relativa para CartWidget
import CartWidget from './CartWidget.jsx';; 

const NavBar = () => {
  // Estilos básicos para la demostración y branding de Kadull
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#005f73', // Un color de agua o mar profundo, por ejemplo
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontWeight: '500',
  };

  return (
    <header style={navStyle}>
      
      {/* 👑 LOGO: Utilizando el nombre "Kadull" 👑 */}
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer' }}>
        KADULL
      </div>

      {/* Enlaces de navegación específicos para trajes de baño */}
      <nav>
        <a href="#inicio" style={linkStyle}>Inicio</a>
        <a href="#bikinis" style={linkStyle}>Bikinis</a>
        <a href="#enteras" style={linkStyle}>Enteras</a>
        <a href="#accesorios" style={linkStyle}>Accesorios</a>
      </nav>

      {/* Widget del carrito de compras (Componente anidado) */}
      <CartWidget /> 
    </header>
  );
};

export default NavBar;