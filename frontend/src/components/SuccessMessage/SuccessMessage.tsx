import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function SuccessMessage({ onReset }: any) {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <div className="contact-card success-card">
        <p className="contact-card-text">
          Merci pour votre message.
          <br />
          Je vous recontacterai très prochainement en toute sérénité.
          <br />
          Mme Bordeyne
        </p>

        <div className="success-actions">
          <Button type="primary" className="cta-btn" onClick={onReset}>
            Envoyer un autre message
          </Button>

          <Button
            type="primary"
            className="cta-btn"
            onClick={() => navigate("/")}
          >
            Retour à l’accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
