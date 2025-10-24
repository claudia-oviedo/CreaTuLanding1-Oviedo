// src/index.js

import React from 'react';
// Importación del método moderno para renderizado 
import { createRoot } from 'react-dom/client'; 

import App from './App'; 


const container = document.getElementById('root');

// raíz de React para renderizar la aplicación
const root = createRoot(container); 

// Renderizar el componente principal
root.render(
  <React.StrictMode>
    <App /> {}
  </React.StrictMode>
);