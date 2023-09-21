import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './components/login'
import Dashboard from './components/dashboard'
import AddKnowledge from './pages/addKnowledge' 
import Register from './pages/register'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addKnowledge" element={<AddKnowledge />} />
      <Route path="/Register" element={<Register />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
