import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
export default function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>

    </div>
  )
}
