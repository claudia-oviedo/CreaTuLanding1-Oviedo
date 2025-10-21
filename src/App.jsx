// src/App.jsx

import React from 'react';
// ➡️ CORRECCIÓN CRÍTICA: Rutas relativas con './components/' para NavBar
import NavBar from './components/NavBar.jsx'; 
// ➡️ CORRECCIÓN CRÍTICA: Rutas relativas con './components/' para ItemListContainer
import ItemListContainer from './components/ItemListContainer.jsx';

const App = () => {
    
    // El mensaje de bienvenida que se enviará como prop.
    const mensajeDeBienvenida = "¡Bienvenido/a a KADULL! Prepárate para el verano con la mejor colección de trajes de baño.";
    
    return (
        <div className="App">
            
            {/* 1. Renderiza el componente de navegación (que incluye el carrito) */}
            <NavBar />
            
            {/* 2. Renderiza el componente contenedor y envía la prop 'greeting' */}
            <ItemListContainer greeting={mensajeDeBienvenida} />

            <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e9ecef', color: '#6c757d' }}>
                <p>&copy; 2025 KADULL E-commerce Base. Todos los derechos reservados.</p>
            </footer>

        </div>
    );
};

export default App;