import "./Home.css";
import PersonIcon from "@mui/icons-material/Person";
import SpaIcon from "@mui/icons-material/Spa";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import GroupsIcon from "@mui/icons-material/Groups";

export default function Home() {
  return (
    <div className="home-container">
      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="badge">Sophrologie & Bien-être</span>

            <h1>
              Retrouvez votre <span>équilibre</span> intérieur
            </h1>

            <p className="hero-desc">
              Je suis <strong>Lucie Bordeyne</strong>, sophrologue, et je vous
              accompagne vers plus de sérénité et de bien-être.
            </p>

            <div className="hero-buttons">
              <button className="cta-home">Prendre rendez-vous</button>
              <button className="cta-secondary">Découvrir</button>
            </div>
          </div>
        </section>

        <section className="intro">
          <p>
            Je suis <strong>Lucie Bordeyne</strong>, sophrologue, et
            j’accompagne enfants, adultes et seniors dans la gestion du stress.
          </p>
          <p>
            Grâce à des techniques simples, vous retrouvez un équilibre
            intérieur.
          </p>
          <p>Un accompagnement doux et adapté à votre rythme.</p>
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
            <SelfImprovementIcon className="benefit-icon" />
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
          <button className="cta-home">Réserver une séance</button>
        </section>
      </main>
    </div>
  );
}
