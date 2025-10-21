// src/index.js

import React from 'react';
// Importación del método moderno para renderizado (React 18)
import { createRoot } from 'react-dom/client'; 

// ➡️ IMPORTACIÓN CRÍTICA:
// Asegúrate de que tu archivo de componente se llame App.jsx (sin 's')
import App from './App'; 

// 1. Obtener el elemento contenedor del HTML (el <div> con id='root')
const container = document.getElementById('root');

// 2. Crear la raíz de React para renderizar la aplicación
const root = createRoot(container); 

// 3. Renderizar el componente principal <App />
root.render(
  <React.StrictMode>
    <App /> {/* Aquí se inserta el NavBar, ItemListContainer, y todo lo demás */}
  </React.StrictMode>
);