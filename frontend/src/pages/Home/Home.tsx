import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <main>
        <div className="hero">
          <div className="name">Lucie Bordeyne</div>
          <div className="slogan">SOPHROLOGIE & BIEN-ÊTRE</div>
          <div className="subtitle">Accompagnement personnalisé</div>
        </div>

        <p>
          Retrouvez sérénité et équilibre grâce à des séances adaptées à vos
          besoins.
        </p>

        <button className="cta-home">Prendre rendez-vous</button>
      </main>
    </div>
  );
}