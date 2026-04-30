import { useAuth } from "../../context/AuthContext";

export default function Admin() {
  const { user } = useAuth();

  return (
    <div>
      <h1> {user && <p>Bienvenue {user.name}</p>}</h1>
    </div>
  );
}
