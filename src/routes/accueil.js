import "../style/accueil.css";
import Video from "../assset/ring.mp4";
import Photo from "../assset/pexels-dellon-thomas-2216612.jpg";
import Image from "../assset/pexels-ashutosh-sonwani-1762578 1 (1).png";
import Cont from "../routes/cont";

function Accueil() {
  return (
    <>
      <div className="vid">
        <video src={Video} id="backgroung-video" autoPlay loop muted></video>

        <div className="accueil-text">
          <h1>WEBOXING</h1>
        </div>

        <div className="bienvenue">
          <h1>BIENVENUE</h1>
          <p>Réveillez le champion qui sommeille en vous avec Weboxing</p>

          <button>Se Connecter</button>
        </div>

        <div className="actualite">
          <div className="photo">
            <img src={Photo} id="background-photo" />
          </div>
          <div className="texte">
            <h2>Actualité</h2>
            <p>
              🥊 Nouveau cours de boxe de groupe ! Rejoignez-nous pour une
              expérience d'entraînement intense et dynamique. Notre entraîneur
              professionnel vous guidera à travers des séances de boxe variées,
              adaptées à tous les niveaux. Ne manquez pas cette occasion de vous
              entraîner dans une ambiance conviviale et motivante. Réservez
              votre place dès maintenant et venez découvrir les bienfaits de la
              boxe pour votre corps et votre esprit ! 🥊
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="gant">
            <img src={Image} id="background-photo" />
          </div>

          <div className="lettre">
            <h3>Qui sommes nous</h3>

            <p>
              Chez Weboxing, nous sommes une équipe passionnée par la boxe et
              dévouée à offrir à nos clients une expérience exceptionnelle.
              Notre objectif est de fournir des équipements de boxe de haute
              qualité, soigneusement sélectionnés pour répondre aux besoins des
              boxeurs de tous niveaux. De plus, nous sommes fiers de proposer
              des services d'entraînement professionnels, dispensés par des
              coachs expérimentés, pour vous aider à atteindre vos objectifs
              sportifs. Rejoignez la communauté Weboxing dès aujourd'hui et
              découvrez notre passion pour la boxe et notre engagement envers
              votre réussite sportive !
            </p>
          </div>
        </div>
        <Cont />
      </div>
    </>
  );
}

export default Accueil;
