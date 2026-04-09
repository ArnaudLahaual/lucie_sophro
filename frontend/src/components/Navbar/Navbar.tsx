import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left">
        <button className="burger" onClick={() => setOpen(!open)}>
          <div className={`burger-lines ${open ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <span className="home">Lucie Bordeyne</span>
      </div>

      <div className={`menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Accueil
        </Link>
        <Link to="/projets" onClick={() => setOpen(false)}>
          Mes spécialités
        </Link>
        <Link to="/projets" onClick={() => setOpen(false)}>
          Réservations
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link to="/projets" onClick={() => setOpen(false)}>
          Mentions légales
        </Link>
        {/* <Link to="/reservation" className="cta-nav" onClick={() => setOpen(false)}>Réserver</Link> */}
      </div>
    </nav>
  );
}
