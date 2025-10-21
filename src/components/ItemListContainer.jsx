// src/components/ItemListContainer.jsx
import React from 'react';

// ➡️ El componente recibe "props" como argumento
const ItemListContainer = (props) => {
  // Usamos desestructuración para un código más limpio y fácil de leer
  const { greeting } = props; // Extrae la variable 'greeting' de las props

  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      {/* ➡️ Uso de la prop para el mensaje de bienvenida */}
      <h2>{greeting}</h2>
      <p>Aquí se mostrará el catálogo de productos próximamente.</p>
    </main>
  );
};

export default ItemListContainer;