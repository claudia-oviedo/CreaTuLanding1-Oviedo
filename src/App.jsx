// src/App.jsx

import React, { useState } from 'react'; 
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx'; 
import CartWidget from './components/CartWidget.jsx'; //ruta

const App = () => {
  
  //  ESTADO DEL CARRITO
  const [cart, setCart] = useState([]); 
  
  const mensajeDeBienvenida = "¡Bienvenido/a a KADULL! Prepárate para el verano con la mejor colección de trajes de baño!";
  
  //  Lógica para manejar agreg carrit
  const handleAddToCart = (productToAdd, selectedTalla) => {
    // Aquí recibimos el objeto producto completo y la talla
    const cartItem = {
        ...productToAdd, 
        tallaSeleccionada: selectedTalla,
        quantity: 1, 
        itemId: Date.now() 
    };
    
    setCart(prevCart => [...prevCart, cartItem]);
    console.log(`[App.jsx] Producto añadido: ${productToAdd.nombre} Talla: ${selectedTalla}`);
  };


  return (
    <div className="App">
      {/*  Renderiza el componente de navegación y pasa el cart.length al CartWidget */}
      <NavBar cartItemCount={cart.length}>
      
      </NavBar> 

      {/*  Renderiza el componente contenedor y FUNCIÓN DE AGREGAR */}
      <ItemListContainer 
        greeting={mensajeDeBienvenida}
        onAddToCart={handleAddToCart} 
      /> 

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #eee' }}>
        &copy; 2025 KADULL E-commerce Base. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default App;