import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Mes spécialités" },
    { path: "/reservations", label: "Réservations" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "A propos" },
    { path: "/mentions", label: "Mentions légales" },
  ];

  const handleCloseNavBar = () => {
    setOpen(false);
  };

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
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={handleCloseNavBar}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
