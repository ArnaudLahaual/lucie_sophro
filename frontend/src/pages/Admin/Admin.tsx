import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./Admin.css";
import Dashboard from "./Dashboard";
import Bookings from "./Bookings";

type MenuItem = Required<MenuProps>["items"][number];

export default function Admin() {
  const [activeView, setActiveView] = useState("dashboard");
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  const onClick: MenuProps["onClick"] = (e) => {
    setActiveView(e.key);
  };

  const items: MenuItem[] = [
    {
      key: "dashboard",
      icon: <AppstoreOutlined />,
      label: "Dashboard",
    },
    {
      key: "bookings",
      icon: <MailOutlined />,
      label: "Réservations",
      // children: [
      //   { key: "bookings-list", label: "Toutes les réservations" },
      // ],
    },
    {
      key: "slots",
      icon: <SettingOutlined />,
      label: "Créneaux",
      children: [
        { key: "slots-list", label: "Gérer les créneaux" },
        { key: "slots-block", label: "Bloquer une date" },
      ],
    },
  ];

  return (
    <div className="admin-container">
      <h1 className="admin-title">Bienvenue {user?.name}</h1>

      <div className="admin-layout">
        <aside className="admin-sidebar">
          <Menu onClick={onClick} mode="inline" items={items} />
        </aside>

        <main className="admin-main">
          {activeView === "dashboard" && <Dashboard />}
          {activeView === "bookings" && <Bookings />}
          {activeView === "slots-list" && <p>🕒 Gestion des créneaux</p>}
          {activeView === "slots-block" && <p>🚫 Bloquer une date</p>}
        </main>
      </div>
    </div>
  );
}
