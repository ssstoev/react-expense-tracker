import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { TransactionProvider } from './context/TransactionProvider.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransactionProvider>
    <App />
    </TransactionProvider>
  </StrictMode>,
)
