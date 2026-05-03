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
            Sophrologue — Micro-entreprise
            <br />
            SIRET : XXX XXX XXX XXXXX
            <br />
            Adresse : [Adresse complète]
            <br />
            Email :{" "}
            <a href="mailto:lucie.bordeyne@hotmail.com">
              lucie.bordeyne@hotmail.com
            </a>
          </p>
        </section>

        <section className="mentions-card">
          <h2>Directeur de publication</h2>
          <p>Lucie Bordeyne</p>
        </section>

        <section className="mentions-card">
          <h2>Hébergement</h2>
          <p>Ce site est hébergé par :</p>
          <p>
            <strong>[Nom de l'hébergeur]</strong>
            <br />
            [Adresse de l'hébergeur]
            <br />
            Site :{" "}
            <a href="[URL hébergeur]" target="_blank" rel="noopener noreferrer">
              [URL hébergeur]
            </a>
          </p>
        </section>

        <section className="mentions-card">
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo)
            est la propriété exclusive de Lucie Bordeyne, sauf mention
            contraire. Toute reproduction, distribution ou utilisation sans
            autorisation écrite préalable est strictement interdite.
          </p>
        </section>

        <section className="mentions-card">
          <h2>Données personnelles</h2>

          <h3>Responsable du traitement</h3>
          <p>Lucie Bordeyne — lucie.bordeyne@hotmail.com</p>

          <h3>Données collectées</h3>
          <p>
            Ce site collecte les données suivantes dans le cadre de la prise de
            rendez-vous et du formulaire de contact : nom, prénom, adresse
            e-mail, numéro de téléphone, et le motif de la séance.
          </p>

          <h3>Finalité et base légale</h3>
          <p>
            Ces données sont traitées sur la base de votre consentement (article
            6.1.a du RGPD) et de l'exécution d'un contrat de prestation de
            services (article 6.1.b du RGPD), dans le seul but de gérer les
            rendez-vous et répondre aux demandes de contact.
          </p>

          <h3>Durée de conservation</h3>
          <p>
            Vos données sont conservées pendant une durée maximale de 3 ans à
            compter du dernier contact, conformément aux recommandations de la
            CNIL pour les données de prospection et de gestion clientèle.
          </p>

          <h3>Vos droits</h3>
          <p>
            Conformément au RGPD, vous disposez des droits suivants sur vos
            données : accès, rectification, suppression, limitation du
            traitement, portabilité et opposition. Pour exercer ces droits,
            contactez :{" "}
            <a href="mailto:lucie.bordeyne@hotmail.com">
              lucie.bordeyne@hotmail.com
            </a>
            .
          </p>

          <p>
            En cas de litige, vous pouvez introduire une réclamation auprès de
            la CNIL :{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr
            </a>
            .
          </p>
        </section>

        <section className="mentions-card">
          <h2>Cookies et stockage local</h2>
          <p>
            Ce site n'utilise pas de cookies publicitaires, de traceurs
            marketing ni d'outils d'analyse tiers.
          </p>
          <p>
            Un token d'authentification est stocké dans le stockage local de
            votre navigateur (<em>localStorage</em>) uniquement si vous accédez
            à un espace sécurisé. Ce token est strictement nécessaire au
            fonctionnement du service : il ne collecte aucune donnée personnelle
            et est supprimé à la déconnexion.
          </p>
          <p>Aucun consentement à des cookies n'est requis sur ce site.</p>
        </section>

        <section className="mentions-card">
          <h2>Responsabilité</h2>
          <p>
            Les séances de sophrologie proposées ne se substituent en aucun cas
            à un suivi médical ou psychologique.
          </p>
        </section>
      </main>
    </div>
  );
}
