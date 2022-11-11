import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {Route,Routes}from "react-router-dom"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"


function App() {


  return (
    
    <div className="App">
       <Header/> 
    
      <Routes>
        <Route path="/" element={<Photos/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>


      
      </div>
     
  )
}

export default App
