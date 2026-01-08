import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useParlor } from "./ParlorContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  const { setParlor } = useParlor();
  return (
    <header>
      <p>Eros' Parlor Room</p>
      <nav>
        <NavLink to="/">Parlor Room</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register"> Register</NavLink>
      </nav>
    </header>
  );
}
