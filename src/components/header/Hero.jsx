import styles from "./Header.module.css";
import CvButton from "./CvButton";

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
          contribuire al successo di un' azienda nel settore{" "}
          <span className={styles.brandspan}>Tech</span>! Dinamico, orientato ai
          risultati e appassionato di apprendimento continuo, sempre pronto ad
          affrontare nuove sfide e superare le aspettative!
        </p>
        <div className={styles.imgContainer}>
          <div>
            <img
              className={styles.badge}
              src="/src/assets/images/imageHTML.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageCSS.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageJs.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageTs.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageReact.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageNodeJs.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageBootstrap.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageDotNet.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageCSharp.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageSQL.png"
              alt=""
            />
            <img
              className={styles.badge}
              src="/src/assets/images/imageGitHub.png"
              alt=""
            />
          </div>
          <CvButton />
        </div>
      </div>
      <div className={styles.profiloContainer}>
        <img
          className={styles.profilo}
          src="/src/assets/images/imageAle.png"
          alt=""
        />
        <img
          className={styles.loader}
          src="/src/assets/images/Loader.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
