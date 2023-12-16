import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hello from '../components/Greeting.jsx'
import { Animals } from '../components/animals.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello />
    <Animals />
  </React.StrictMode>,
)
