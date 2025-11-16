import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">BOTAI Chat</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

