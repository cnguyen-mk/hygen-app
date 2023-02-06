import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin'
import Hello from './pages/Hello'
import Home from './pages/Home'
import User from './pages/User'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Hello" element={<Hello />} />
      <Route path="/admin-management" element={<Admin />} />
      <Route path="/user-profile" element={<User />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
