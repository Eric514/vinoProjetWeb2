import Entete from "../Entete/Entete";
import "./PageErreur.css";
import erreur from "../../img/404.png";

function PageErreur(){

  return (
    <>
    <Entete/>
    <main>
      
      <img src={erreur} alt="Image d'Erreur" />
      <h1>Oopsi, cette page ne semble pas exister</h1>
    </main>
    </>
  );
}

export default PageErreur;