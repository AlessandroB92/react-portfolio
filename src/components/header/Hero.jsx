import styles from "./Header.module.css";
import CvButton from "./CvButton";

// Importa le immagini
import imageHTML from '../../assets/images/imageHTML.png';
import imageCSS from '../../assets/images/imageCSS.png';
import imageJs from '../../assets/images/imageJs.png';
import imageTs from '../../assets/images/imageTs.png';
import imageReact from '../../assets/images/imageReact.png';
import imageNodeJs from '../../assets/images/imageNodeJs.png';
import imageBootstrap from '../../assets/images/imageBootstrap.png';
import imageDotNet from '../../assets/images/imageDotNet.png';
import imageCSharp from '../../assets/images/imageCSharp.png';
import imageSQL from '../../assets/images/imageSQL.png';
import imageGitHub from '../../assets/images/imageGitHub.png';
import imageAle from '../../assets/images/imageAle.png';
import Loader from '../../assets/images/Loader.png';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.description}>
        <h1 className="m-3 fw-bold">
          <span className={styles.brandspan}>FULL-STACK WEB DEVELOPER</span>
        </h1>
        <hr className="mx-3"/>
        <p className="mx-3 mb-4">
          Alla ricerca di opportunità che mi permettano di continuare a crescere
          come <span className={styles.brandspan}>Web Developer</span> e
          contribuire al successo di un`azienda nel settore{" "}
          <span className={styles.brandspan}>Tech</span>! Dinamico, orientato ai
          risultati e appassionato di apprendimento continuo, sempre pronto ad
          affrontare nuove sfide e superare le aspettative!
        </p>
        <div className={styles.imgContainer}>
          <div>
            <img className={styles.badge} src={imageHTML} alt="HTML" />
            <img className={styles.badge} src={imageCSS} alt="CSS" />
            <img className={styles.badge} src={imageJs} alt="JavaScript" />
            <img className={styles.badge} src={imageTs} alt="TypeScript" />
            <img className={styles.badge} src={imageReact} alt="React" />
            <img className={styles.badge} src={imageNodeJs} alt="Node.js" />
            <img className={styles.badge} src={imageBootstrap} alt="Bootstrap" />
            <img className={styles.badge} src={imageDotNet} alt=".NET" />
            <img className={styles.badge} src={imageCSharp} alt="C#" />
            <img className={styles.badge} src={imageSQL} alt="SQL" />
            <img className={styles.badge} src={imageGitHub} alt="GitHub" />
          </div>
          <CvButton />
        </div>
      </div>
      <div className={styles.profiloContainer}>
        <img className={styles.profilo} src={imageAle} alt="Profile" />
        <img className={styles.loader} src={Loader} alt="Loader" />
      </div>
    </div>
  );
}

export default Hero;
