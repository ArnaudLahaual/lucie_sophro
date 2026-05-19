import "./Services.css";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ElderlyIcon from "@mui/icons-material/Elderly";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SpaIcon from "@mui/icons-material/Spa";
import AirIcon from "@mui/icons-material/Air";

export default function Services() {
  return (
    <div className="services-container">
      <div className="about-hero">
        <h1>Mes accompagnements</h1>
        <p className="services-subtitle">
          Un accompagnement adapté à chacun, à chaque étape de la vie
        </p>
      </div>

      <section className="services-section">
        <h2>Pour qui ?</h2>
        <div className="services-grid">
          <div className="card">
            <ChildCareIcon className="icon" />
            <p>Les enfants</p>
          </div>
          <div className="card">
            <SelfImprovementIcon className="icon" />
            <p>Les adultes</p>
          </div>
          <div className="card">
            <ElderlyIcon className="icon" />
            <p>Les seniors</p>
          </div>
        </div>

        <p className="services-text">
          Que vous traversiez une période difficile ou que vous souhaitiez
          simplement améliorer votre bien-être au quotidien.
        </p>
      </section>

      <section className="services-section">
        <h2>Problématiques accompagnées</h2>
        <div className="services-grid">
          <div className="card">
            <PsychologyIcon className="icon" />
            <p>Stress et anxiété</p>
          </div>
          <div className="card">
            <SpaIcon className="icon" />
            <p>Troubles du sommeil</p>
          </div>
          <div className="card">
            <PsychologyIcon className="icon" />
            <p>Gestion des émotions</p>
          </div>
          <div className="card">
            <AirIcon  className="icon" />
            <p>Confiance en soi</p>
          </div>
          <div className="card">
            <SpaIcon className="icon" />
            <p>Fatigue mentale et physique</p>
          </div>
          <div className="card">
            <PsychologyIcon className="icon" />
            <p>Préparation (examens…)</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Déroulement d'une séance</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Temps d’échange</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Exercices de respiration dynamique</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Sophronisation</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Tarifs</h2>
        <div className="pricing">
          <div className="price-card">
            <p>Séance individuelle</p>
            <span>50 €</span>
          </div>
          <div className="price-card">
            <p>Séance enfant</p>
            <span>45 €</span>
          </div>
          <div className="price-card">
            <p>Séance groupe</p>
            <span>Sur demande</span>
          </div>
        </div>
      </section>

      <section className="services-section info">
        <h2>Informations</h2>
        <p>
          <strong>Durée :</strong> 1h
        </p>
        <p>
          <strong>Règlement :</strong> espèces / cb / chèque
        </p>
      </section>
    </div>
  );
}
