// src/components/Item.jsx

import React, { useState } from 'react';

// Recibe 'tallas' y la función 'onAddToCart'
const Item = ({ id, nombre, descripcion, precio, imagenUrl, stock, tallas, onAddToCart }) => {
  
  // Estado local almacenar la talla seleccionada.
  const [selectedTalla, setSelectedTalla] = useState('');

  
  const handleClick = () => {
    // Validación de tallas
    if (!selectedTalla) {
      alert("Por favor, selecciona una talla antes de añadir al carrito.");
      return;
    }
    
    
    onAddToCart(id, selectedTalla);
    
    
    setSelectedTalla(''); 
  };
  
  // Maneja cambio en selector de tallas
  const handleTallaChange = (event) => {
    setSelectedTalla(event.target.value);
  };
    
  return (
    <div className="product-card" style={{ 
      border: '1px solid #ddd', 
      padding: '15px', 
      margin: '10px', 
      width: '250px', 
      textAlign: 'left',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img 
        src={imagenUrl} 
        alt={nombre} 
        style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '4px' }} 
      />
      
      <h3 style={{ margin: '5px 0' }}>{nombre}</h3>
      <p style={{ fontSize: '1.2em', color: '#007bff', fontWeight: 'bold', margin: '10px 0' }}>{precio}</p>
      
      <p style={{ fontSize: '0.9em', color: '#555', minHeight: '40px' }}>{descripcion}</p>
      
      {/*  selección de Tallas */}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor={`talla-${id}`} style={{ display: 'block', fontWeight: 'bold' }}>Talla:</label>
        <select 
          id={`talla-${id}`}
          onChange={handleTallaChange}
          value={selectedTalla}
          style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          disabled={stock === 0}
        >
          <option value="" disabled>-- Seleccionar Talla --</option>
          {tallas.map(talla => (
            <option key={talla} value={talla}>{talla}</option>
          ))}
        </select>
      </div>

      <p style={{ fontSize: '0.8em', color: stock > 0 ? 'green' : 'red' }}>
        Stock: {stock > 0 ? stock : 'Agotado'}
      </p>

      {/* El botón llama a handleClick */}
      <button 
        style={{ 
          backgroundColor: '#ff69b4',
          color: 'white', 
          border: 'none', 
          padding: '10px 20px', 
          cursor: 'pointer',
          borderRadius: '4px',
          width: '100%',
          marginTop: '10px'
        }}
        onClick={handleClick}
        disabled={stock === 0}
      >
        {stock > 0 ? "Añadir al Carrito" : "Agotado"}
      </button>
    </div>
  );
};

export default Item;