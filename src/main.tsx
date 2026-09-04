import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { LanguageProvider } from '@/hooks/use-language'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Toaster position="top-right" />
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
