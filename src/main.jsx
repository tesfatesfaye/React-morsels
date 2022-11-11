import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import {BrowserRouter as Router} from "react-router-dom"
import {ThemeContextProvider} from "./themeContext"




ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
  <Router>
    <App />

  </Router>  
  </ThemeContextProvider>
  
    
  
)
