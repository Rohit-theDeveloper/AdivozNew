import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "aos/dist/aos.css";


if (window.location.hostname === "adivoz.com") {
  window.location.href = "https://www.adivoz.com" + window.location.pathname;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
