import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// ⚠️ CORRECCIÓN CLAVE: Asegúrate de que la ruta sea correcta.
// En tu estructura, es probable que solo necesites './App' o './App.jsx'
import App from './App.jsx'; 
// Si decidiste llamar a tu archivo principal App.jsx, esta línea es crucial.

// Si necesitas estilos globales, deben ir aquí:
// import './index.css'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);