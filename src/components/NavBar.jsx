// src/components/NavBar.jsx

import React from 'react';
import CartWidget from './CartWidget.jsx'; 

// Colores del tema:
const COLOR_ARENA = '#F7E9C8'; 
const COLOR_ACENTO = '#A5465C'; 

const NavBar = ({ cartItemCount }) => {
    
    // Estilos de la barra nav
    const navStyle = {
        backgroundColor: COLOR_ARENA, 
        color: COLOR_ACENTO, 
        padding: '10px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };
    
    // Estilo para el cont del logo
    const logoContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    };

    
    const logoImageStyle = {
        height: '120px', 
        width: 'auto', 
        marginRight: '10px',
    };

   
    const linkStyle = {
        color: COLOR_ACENTO, 
        textDecoration: 'none',
        padding: '5px 10px',
        fontWeight: 'bold'
    };
    
    return (
        <nav style={navStyle}>
            {/* INICIO: CONTENEDOR DEL LOGO  */}
            <a href="/" style={logoContainerStyle}>
                
                {/* LOGO */}
                <img 
                    src="/kadull_logo.png" 
                    alt="KADULL - Moda de Playa" 
                    style={logoImageStyle} 
                />
            </a>
            {/*  LOGO */}
            
            {/* ENLACES NAV */}
            <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#" style={linkStyle}>Inicio</a>
                <a href="#" style={linkStyle}>Bikinis</a>
                <a href="#" style={linkStyle}>Enteras</a>
                <a href="#" style={linkStyle}>Accesorios</a>
            </div>
            
            {/* CART WIDGET*/}
            <CartWidget count={cartItemCount} color={COLOR_ACENTO} /> 
            
        </nav>
    );
};

export default NavBar;