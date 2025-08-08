import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import VercelAnalytics from './components/VercelAnalytics.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <VercelAnalytics />
  </StrictMode>,
)
