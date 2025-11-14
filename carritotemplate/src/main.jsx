import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../public/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'animate.css';
import "../public/css/style.css"
import './index.css'
import App from './App.jsx'
//https://bootswatch.com/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
