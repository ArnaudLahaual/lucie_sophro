import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      Dashboard
      {user && <div>Bonjour {user.name} !</div>}{" "}
      <div className="dashboard-grid">
        <div className="card">
          <h3>Aujourd’hui</h3>
          <p>3 réservations</p>
          <ul>
            <li>09:00 — Marie (adulte)</li>
            <li>11:00 — Paul (enfant)</li>
          </ul>
        </div>

        <div className="card">
          <h3>Statistiques</h3>
          <p>Semaine : 12</p>
          <p>Mois : 42</p>
        </div>

        <div className="card">
          <h3>Actions rapides</h3>
          <button>Bloquer une date</button>
        </div>
      </div>
    </div>
  );
}
