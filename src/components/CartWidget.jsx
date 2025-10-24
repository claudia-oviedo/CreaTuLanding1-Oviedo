// src/components/CartWidget.jsx

import React from 'react';

const CartWidget = ({ count }) => {
  return (
    <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        fontSize: '1.2em', 
        color: 'white',
        cursor: 'pointer'
    }}>
      {/* Icono de Carritoo}
      <span role="img" aria-label="shopping cart" style={{ fontSize: '1.5em' }}>
        🛒
      </span>
      {/* Cont Items */}
      <span style={{ 
        marginLeft: '5px', 
        backgroundColor: 'black', 
        borderRadius: '50%', 
        padding: '2px 8px', 
        fontSize: '0.8em',
        fontWeight: 'bold'
      }}>
        {count}
      </span>
    </div>
  );
};

export default CartWidget;