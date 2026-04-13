import "./Mentions.css";

export default function Mentions() {
  return (
    <div className="mentions-container">
      <main>
        <div className="mentions-hero">
          <h1>Mentions légales</h1>
        </div>

        <section className="mentions-card">
          <h2>Éditeur du site</h2>
          <p>Le présent site est édité par :</p>
          <p>
            <strong>Lucie Bordeyne</strong>
            <br />
            Auto-entrepreneuse (micro-entreprise)
            <br />
            SIRET : 123 456 789 00012
            <br />
            Adresse : *********
            <br />
            Email : lucie.bordeyne@hotmail.com
          </p>
        </section>

        <section className="mentions-card">
          <h2>Responsable de publication</h2>
          <p>Lucie Bordeyne</p>
        </section>

        <section className="mentions-card">
          <h2>Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <p>
            *****
            <br />
            *****
            <br />
           ******
            <br />
            Site : ******
          </p>
        </section>

        <section className="mentions-card">
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu du site (textes, images, graphismes, logo) est
            la propriété exclusive de Lucie Bordeyne, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, distribution ou utilisation sans autorisation
            est interdite.
          </p>
        </section>

        <section className="mentions-card">
          <h2>Données personnelles</h2>
          <p>
            Les informations recueillies via le formulaire de contact sont
            uniquement utilisées pour répondre aux demandes des utilisateurs.
          </p>
          <p>
            Elles ne sont ni revendues ni utilisées à des fins commerciales.
          </p>
          <p>
            Conformément au RGPD, vous pouvez demander la suppression de vos
            données à tout moment en envoyant un email à l’adresse indiquée
            ci-dessus.
          </p>
        </section>

        <section className="mentions-card">
          <h2>Cookies</h2>
          <p>
            Ce site n’utilise pas de cookies publicitaires ni de traceurs de
            publicité.
          </p>
          <p>
            Seuls des cookies techniques peuvent être utilisés pour assurer le
            bon fonctionnement du site.
          </p>
        </section>
      </main>
    </div>
  );
}
