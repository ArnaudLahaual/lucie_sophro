import "./Accompagnements.css";

export default function Accompagnements() {
  return (
    <div className="acc-container">
      <section className="acc-hero">
        <h1>Accompagnements</h1>
        <p>
          Différentes approches pour vous accompagner selon vos besoins et votre
          rythme.
        </p>
      </section>

      <section className="acc-grid">
        <div className="acc-card">
          <h2>Amélioration du quotidien</h2>
          <ul>
            <li>Troubles du sommeil</li>
            <li>Gestion des émotions</li>
            <li>Difficultés d’apprentissage</li>
            <li>Changement professionnel ou personnel</li>
            <li>Confiance en soi</li>
            <li>Créativité</li>
          </ul>
        </div>

        <div className="acc-card">
          <h2>Préparation mentale</h2>
          <ul>
            <li>Accouchement</li>
            <li>FIV</li>
            <li>Permis de conduire</li>
            <li>Examens scolaires ou médicaux</li>
            <li>Compétitions sportives</li>
            <li>Entretiens professionnels</li>
            <li>Préparation scénique</li>
          </ul>
        </div>

        <div className="acc-card">
          <h2>Accompagnement du vécu médical</h2>
          <ul>
            <li>Dépression</li>
            <li>Acouphènes</li>
            <li>Fibromyalgie</li>
            <li>Maladies chroniques</li>
            <li>Parcours de soins difficiles</li>
          </ul>
          <p className="note">
            * La sophrologie intervient en complément d’un suivi médical.
          </p>
        </div>

        <div className="acc-card">
          <h2>Troubles du comportement</h2>
          <ul>
            <li>TCA (boulimie, anorexie)</li>
            <li>Addictions</li>
            <li>Phobies (agoraphobie, claustrophobie)</li>
            <li>Stress intense</li>
            <li>Anxiété sociale</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
