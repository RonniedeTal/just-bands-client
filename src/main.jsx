import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthWrapper } from './context/auth.context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthWrapper>
 <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthWrapper>
)
