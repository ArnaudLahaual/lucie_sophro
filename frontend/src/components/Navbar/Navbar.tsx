import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "HOME" },
    { path: "/services", label: "SPECIALITES" },
    { path: "/reservations", label: "BOOKING" },
    { path: "/contact", label: "CONTACT" },
    { path: "/about", label: "A PROPOS" },
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
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <button className="cta-home">Prendre rendez-vous</button>
    </nav>
  );
}
