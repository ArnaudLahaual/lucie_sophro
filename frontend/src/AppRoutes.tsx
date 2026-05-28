import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Reservations } from "./pages/Reservations/Reservations";
import { Contact } from "./pages/Contact/Contact";
import Mentions from "./pages/Mentions/Mentions";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Accompagnements from "./pages/Accompagnements/Accompagnements";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions" element={<Mentions />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/accompagnements" element={<Accompagnements />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
