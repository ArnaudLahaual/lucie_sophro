import "./Home.css";
import PersonIcon from "@mui/icons-material/Person";
import SpaIcon from "@mui/icons-material/Spa";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import GroupsIcon from "@mui/icons-material/Groups";

export default function Home() {
  return (
    <div className="home-container">
      <main>
        {/* HERO */}
        <div className="hero">
          <div className="name">Lucie Bordeyne</div>
          <div className="slogan">
            Retrouvez votre équilibre intérieur grâce à la sophrologie
          </div>
          <div className="subtitle">
            Gestion du stress • Apaisement • Confiance • Bien-être
          </div>
        </div>

        {/* PRESENTATION */}
        <section className="intro">
          <p>
            Je suis <strong>Lucie Bordeyne</strong>, sophrologue, et
            j’accompagne enfants, adultes et seniors dans la gestion du stress,
            des émotions et des tensions du quotidien.
          </p>

          <p>
            Grâce à des techniques simples de respiration, de relaxation et de
            visualisation, vous apprenez à vous reconnecter à vous-même et à
            retrouver un équilibre intérieur.
          </p>

          <p>
            Je vous accompagne avec douceur et bienveillance pour retrouver un
            mieux-être durable, à votre rythme.
          </p>
        </section>

        {/* POINTS FORTS */}
        <div className="benefits">
          <div className="benefit">
            <PersonIcon className="benefit-icon" />
            <span>Accompagnement personnalisé</span>
          </div>

          <div className="benefit">
            <SpaIcon className="benefit-icon" />
            <span>Méthode douce et accessible</span>
          </div>

          <div className="benefit">
            <SelfImprovementIcon className="benefit-icon" />
            <span>Séances adaptées à votre rythme</span>
          </div>

          <div className="benefit">
            <GroupsIcon className="benefit-icon" />
            <span>Enfants • Adultes • Seniors</span>
          </div>
        </div>

        {/* CTA */}
        <button className="cta-home">Prendre rendez-vous</button>
      </main>
    </div>
  );
}
