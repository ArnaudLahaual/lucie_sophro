import "./About.css";
import { useNavigate } from "react-router-dom";
import luciePhoto from "../../assets/lucie.jpg";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <main>
        {/* HERO */}
        <div className="about-hero">
          <h1>Qui suis-je ?</h1>
        </div>

        <section className="about-split">
          <div className="about-image">
            <img src={luciePhoto} alt="Lucie Bordeyne" />
          </div>

          <div className="about-text">
            <p>
              Je m’appelle <strong>Lucie Bordeyne</strong>, sophrologue formée à
              l’IFS.
            </p>

            <p>
              Passionnée par l’accompagnement humain, j’ai choisi la sophrologie
              pour aider chacun à retrouver ses ressources, apaiser ses tensions
              et avancer plus sereinement dans sa vie.
            </p>

            <p>
              Mon approche est basée sur <strong>l’écoute</strong>, la{" "}
              <strong>bienveillance</strong> et l’adaptation à chaque personne.
            </p>

            <p>
              Chaque séance est un moment pour vous, un espace de pause et de
              reconnexion à vous-même.
            </p>
          </div>
        </section>

        <section className="about-card highlight">
          <h2>Ma vision</h2>

          <p>
            Je suis profondément convaincue que chacun possède en lui les
            ressources nécessaires pour avancer.
          </p>

          <p>
            Parfois, il suffit simplement d’être accompagné au bon moment, avec
            les bons outils.
          </p>

          <p>
            La sophrologie est une méthode douce, accessible à tous, qui permet
            de se reconnecter à soi et de retrouver un équilibre durable.
          </p>
        </section>

        <section className="about-card">
          <h2>Un chemin personnel devenu une vocation</h2>

          <p>
            La sophrologie a été pour moi une véritable révélation. Elle m’a
            permis d’apaiser mon mental, de mieux comprendre mes émotions et
            surtout de retrouver confiance en moi.
          </p>

          <p>
            Au fil du temps, ce qui était au départ une démarche personnelle est
            devenu une évidence : accompagner à mon tour les personnes qui
            traversent des périodes difficiles ou qui ressentent le besoin de se
            retrouver.
          </p>

          <p>
            Aujourd’hui, je mets cette expérience au cœur de mon accompagnement.
          </p>
        </section>

        <div className="about-cta">
          <p>Envie de prendre soin de vous ?</p>
          <button className="cta-btn" onClick={() => navigate("/reservations")}>
            Prendre rendez-vous
          </button>
        </div>
      </main>
    </div>
  );
}
