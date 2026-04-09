import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Services } from "./pages/Services/Services";
import { Reservations } from "./pages/Reservations/Reservations";
import { Contact } from "./pages/Contact/Contact";
import Mentions from "./pages/Mentions/Mentions";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions" element={<Mentions />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
