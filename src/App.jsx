import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/12" replace />} />
      <Route path="/user/:id" element={<Dashboard />} />
    </Routes>
  )
}

export default App
