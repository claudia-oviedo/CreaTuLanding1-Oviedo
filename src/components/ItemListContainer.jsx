// src/components/ItemListContainer.jsx

import React from 'react'; 
import Item from './item.jsx'; 

// --- DATOS DE PRODUCTOS ---
const productos = [
  {
    "id": 101,
    "nombre": "Bikini Río",
    "precio": 42000,
    "stock": 15,
    "tipo": "Bikini",
    "descripcion": "Estilo cómodo de tirantes anchos.",
    "tallas": ["S", "M", "L"],
    "imagen": "assets/bikini_rio.png" 
  },
  {
    "id": 102,
    "nombre": "Trikini Amazona",
    "precio": 78000,
    "stock": 8,
    "tipo": "Trikini",
    "descripcion": "Diseño de corte audaz y estampado salvaje. Máxima tendencia.",
    "tallas": ["M", "L", "XL"],
    "imagen": "assets/trikini_amazona.png"
  },
  {
    "id": 103,
    "nombre": "Entero Océano",
    "precio": 65000,
    "stock": 12,
    "tipo": "Entero",
    "descripcion": "Malla clásica, cuello halter. Color azul profundo.",
    "tallas": ["S", "M", "L"],
    "imagen": "assets/oceano_entero.png"
  },
  {
    "id": 104,
    "nombre": "Bikini Arena",
    "precio": 39000,
    "stock": 20,
    "tipo": "Bikini",
    "descripcion": "Modelo minimalista color beige. Perfecto para broncearse.",
    "tallas": ["S", "M", "L", "XL"],
    "imagen": "assets/bikini_arena.png"
  }
];
// ----------------------------


const ItemListContainer = ({ greeting, onAddToCart }) => {
  
  //utilidad para  el precio (CLP)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', { 
      style: 'currency', 
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  // Buscar el producto y llama a la función padre
  const handleItemAdd = (productId, selectedTalla) => {
    //  Encontrar por su ID
    const productToAdd = productos.find(p => p.id === productId);

    if (productToAdd) {
        onAddToCart(productToAdd, selectedTalla);
    }
  };


  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h2>{greeting}</h2> 
      
      {/*----------------------------------------------------------------------------------------------------------/}
      
      {/* Contenedor Catálogo */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        
        {/* Mapeo de productos */}
        {productos.map(producto => (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            // Formatear el precio para la vista
            precio={formatPrice(producto.precio)} 
            imagenUrl={producto.imagen}
            stock={producto.stock}
            tallas={producto.tallas} 
            // ----------------------------
            onAddToCart={handleItemAdd} 
          />
        ))}
        
      </div>
    </main>
  );
};

export default ItemListContainer;