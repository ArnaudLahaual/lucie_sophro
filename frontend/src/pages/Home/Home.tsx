import "./Home.css";
import PersonIcon from "@mui/icons-material/Person";
import SpaIcon from "@mui/icons-material/Spa";
import WavesIcon from "@mui/icons-material/Waves";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>
              Retrouvez votre <span>équilibre</span> intérieur
            </h1>

            <p className="hero-desc">
              Dans un quotidien souvent rythmé par le stress, les émotions, les
              responsabilités et la charge mentale, il devient essentiel de
              retrouver un espace pour soi, un espace de calme, d’écoute et de
              reconnexion intérieure.<br></br> Je suis Lucie Bordeyne,
              sophrologue, et j’accompagne enfants, adolescents, adultes et
              seniors vers un mieux-être durable grâce à une approche douce,
              humaine et profondément personnalisée.<br></br> À travers la sophrologie,
              je vous aide à apaiser le mental, relâcher les tensions et
              retrouver un équilibre intérieur grâce à des techniques mêlant
              respiration consciente, relaxation profonde et visualisation
              positive. <br></br>Chaque séance est pensée comme un moment privilégié, une
              parenthèse de douceur où vous pouvez ralentir, vous recentrer et
              avancer à votre rythme, dans un cadre bienveillant et sécurisant.<br></br>
              Que vous traversiez une période de stress, de fatigue
              émotionnelle, de changement de vie, de manque de confiance ou
              simplement le besoin de retrouver davantage de sérénité au
              quotidien, je vous accompagne avec écoute et sensibilité afin de
              vous aider à retrouver vos propres ressources.
            </p>

            <div className="hero-buttons">
              <button
                onClick={() => navigate("/reservations")}
                className="cta-home"
              >
                Prendre rendez-vous
              </button>
              <button
                onClick={() => navigate("/services")}
                className="cta-secondary"
              >
                Découvrir
              </button>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="benefit">
            <PersonIcon className="benefit-icon" />
            <h3>Accompagnement personnalisé</h3>
            <p>Adapté à vos besoins</p>
          </div>

          <div className="benefit">
            <SpaIcon className="benefit-icon" />
            <h3>Méthode douce</h3>
            <p>Accessible à tous</p>
          </div>

          <div className="benefit">
            <WavesIcon className="benefit-icon" />
            <h3>À votre rythme</h3>
            <p>Progressif et efficace</p>
          </div>

          <div className="benefit">
            <GroupsIcon className="benefit-icon" />
            <h3>Tout public</h3>
            <p>Enfants • Adultes • Seniors</p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Prêt à vous sentir mieux ?</h2>
          <button
            onClick={() => navigate("/reservations")}
            className="cta-home"
          >
            Réserver une séance
          </button>
        </section>
      </main>
    </div>
  );
}
