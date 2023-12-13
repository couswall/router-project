import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterApp } from './RouterApp'
import './styles.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <RouterApp/>  
    </HashRouter>
  </React.StrictMode>,
)
