import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hello from './pages/Hello'
import Home from './pages/Home'
import Admin from './pages/Admin'
import User from './pages/User'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Hello" element={<Hello />} />
      <Route path="/user" element={<User />} />
      <Route path="/admin-management" element={<Admin />} />
    </Routes>
  )
}

export default App
