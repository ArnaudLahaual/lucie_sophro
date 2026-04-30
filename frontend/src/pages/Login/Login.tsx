import "./Login.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosconfig";
import { enqueueSnackbar } from "notistack";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/AuthContext";

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (values: LoginForm) => {
    try {
      const resp = await axiosInstance.post("/login", values);
      console.log(resp.data);
      login(resp.data.user, resp.data.token);

      enqueueSnackbar("Connexion réussie", { variant: "success" });

      navigate("/admin");
    } catch (error: any) {
      const message = error.response?.data?.message || "Erreur de connexion";

      enqueueSnackbar(message, { variant: "error" });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <span className="login-badge">Espace professionnel</span>

        <h1>Connexion</h1>

        <p className="login-desc">
          Accédez à votre espace pour gérer vos rendez-vous
        </p>

        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email requis" },
              { type: "email", message: "Email invalide" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Votre email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Mot de passe requis" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Mot de passe"
            />
          </Form.Item>

          <Button htmlType="submit" className="login-btn" block>
            Se connecter
          </Button>
        </Form>
      </div>
    </div>
  );
}
