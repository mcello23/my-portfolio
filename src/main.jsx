import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Shared legacy styles that remain part of the React app
import './styles/cookie-consent.css';
import './styles/materialize.css';
import './styles/navbar.css';
import './styles/prism.css';
import './styles/style.css';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
