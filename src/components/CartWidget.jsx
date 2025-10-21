// src/components/CartWidget.jsx
import React from 'react';

// Se puede usar un icono de librería o un simple emoji
const CartWidget = () => {
  return (
    <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
      🛒 <span style={{ fontSize: '0.8rem', verticalAlign: 'top' }}>0</span>
      {/* El '0' representa la cantidad de ítems en el carrito */}
    </div>
  );
};

export default CartWidget;