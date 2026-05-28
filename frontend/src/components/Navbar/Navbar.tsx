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
    { path: "/", label: "ACCUEIL" },
    { path: "/services", label: "SPECIALITES" },
    { path: "/reservations", label: "RESERVATIONS" },
    { path: "/accompagnements", label: "ACCOMPAGNEMENTS" },
    { path: "/contact", label: "CONTACT" },
    { path: "/about", label: "A PROPOS" },
    ...(isLogged ? [{ path: "/admin", label: "DASHBOARD" }] : []),
  ];

  const handleCloseNavBar = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
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
