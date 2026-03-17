import { Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Layout/Header"
import Sidebar from "./components/Layout/Sidebar"
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <>
    <Header />
    <div className="app_layout">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/user/12" replace />} />
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </div>
    </>
  )
}

export default App
