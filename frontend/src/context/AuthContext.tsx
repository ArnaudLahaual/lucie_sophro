import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../api/axiosconfig";

type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const [isLoading, setIsLoading] = useState<boolean>(
    !!localStorage.getItem("token"),
  );
  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      return;
    }
    axiosInstance
      .get("/me")
      .then((resp) => setUser(resp.data))
      .catch((err) => {
        if (err.response?.status === 401) {
          setToken(null);
          localStorage.removeItem("token");
        }
      })
      .finally(() => setIsLoading(false));
  }, [token]);

  const login = (user: User, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth doit être utilisé sans AuthProvider");
  return context;
};
