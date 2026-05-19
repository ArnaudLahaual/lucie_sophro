import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, token, logout } = useAuth();

  const isLogged = !!user && !!token;

  const links = [
    { path: "/", label: "HOME" },
    { path: "/services", label: "SPECIALITES" },
    { path: "/reservations", label: "BOOKING" },
    { path: "/contact", label: "CONTACT" },
    { path: "/about", label: "A PROPOS" },
    ...(isLogged ? [{ path: "/admin", label: "DASHBOARD" }] : []),
  ];

  const handleCloseNavBar = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

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

        {isLogged && (
          <button
            onClick={() => {
              logout();
              handleCloseNavBar();
              navigate("/");
            }}
            className="nav-logout"
          >
            DECONNEXION
          </button>
        )}
      </div>

      {!isLogged && (
        <button onClick={() => navigate("/reservations")} className="cta-home">
          Prendre rendez-vous
        </button>
      )}
    </nav>
  );
}
