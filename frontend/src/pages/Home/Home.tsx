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
          <div className="home-hero-content">
            <h1>
              Retrouvez votre <span>équilibre</span> intérieur
            </h1>

            <p className="hero-desc">
              Je suis <strong>Lucie Bordeyne</strong>, sophrologue, j’accompagne
              enfants, adultes et seniors dans la gestion du stress.
            </p>
            <p>
              Grâce à des techniques simples de respiration, de relaxation et de
              visualisation, vous apprenez à vous reconnecter à vous-même et à
              retrouver un équilibre intérieur.
            </p>
            <p>
              {" "}
              Je vous accompagne avec douceur et bienveillance pour retrouver un
              mieux-être durable, à votre rythme.{" "}
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
