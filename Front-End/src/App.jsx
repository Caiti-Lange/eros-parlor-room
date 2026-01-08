import ParlorRoom from "./components/ParlorRoom.jsx";
import {Route, Routes} from "react-router-dom"
import Navbar from "./layout/Navbar.jsx";
import Register from "./auth/Registration.jsx";
import Login from "./auth/Login.jsx";

export default function App() {
  return (
    <div className="main-screen">
      <header className="p-6 text-center">
        <h1 className="header">Eros’ Parlor Room</h1>
        <p className="tagline">A salon for your beloved muses</p>
      </header>
      <Navbar></Navbar>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ParlorRoom />} />
      </Routes>
    </div>
  
  )
}

