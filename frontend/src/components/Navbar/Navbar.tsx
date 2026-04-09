import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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

        <span className="home">Sophrologie Lucie</span>
      </div>

      <div className={`menu ${open ? "open" : ""}`}>
        <Link to="/" className="home">
          Accueil
        </Link>{" "}
        <a href="/projets">Projets</a>
        <a href="/contact">Contact</a>
        <a href="/reservation" className="cta">
          Réserver
        </a>
      </div>
    </nav>
  );
}
