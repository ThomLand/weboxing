import Navbar from "../composant/navbar";
import Comb from "./comb";
import Compns from "./compns";
import productImg from "../assset/7.png";
import Reservation from "./reservation";
import Footer from "./footer";

export default function Service() {
  return (
    <div className="service">
      <Navbar />
      <Comb
        cName="comb"
        heroimg={productImg}
        title=""
        text=""
        buttonText=""
        url="/"
        btnClass="show"
      />
      <h1>NOS SÉANCES</h1>
      <div className="flex">
        <Compns
          cName="seance"
          title="JUNIOR"
          text="Découvrez nos séances de boxe pour 
            débutants, encadrées par des professionnels 
            passionnés et expérimentés.
            Apprenez les bases de la boxe, 
            améliorez votre condition physique et 
            développez vos compétences avec des exercices 
            adaptés à votre niveau."
          date="10-08-2023 à 15h"
          date2="23-08-2023 à 16h"
        />

        <Compns
          cName="seance"
          title="SENIOR"
          text="Découvrez nos séances de boxe avancées, 
            spécialement conçues pour les passionnés expérimentés 
            en quête de défis techniques et physiques. Bénéficiez 
            d'un accompagnement personnalisé et d'un entraînement 
            stimulant pour perfectionner vos compétences et atteindre 
            vos objectifs sportifs."
          date="31-07-2023 à 10h"
          date2="07-08-2023 à 14h"
        />

        <Compns
          cName="seance"
          title="EXPERT"
          text="Explorez nos séances de boxe pour experts, destinées 
            aux pratiquants chevronnés souhaitant pousser leurs limites 
            et exceller dans leur discipline. Profitez d'un encadrement 
            professionnel et d'un programme intensif adapté à votre niveau, 
            pour vous entraîner avec des passionnés de haut niveau et relever 
            de nouveaux défis sportifs."
          date="29-07-2023 à 13h"
          date2="12-08-2023 à 16h"
        />
      </div>
      <div className="flexc">
        <Reservation />
        <div className="imgagbelle"></div>
      </div>
      <Footer cName="footer" text="© 2023 Weboxing. Tous Droits Réservés." />
    </div>
  );
}
