import styles from "./Header.module.css";

function Hero () {
    return (
<div className={styles.hero}>
        <div className={styles.description}>
          <h1 className="m-3"><span className={styles.brandspan}>WEB DEVELOPER</span></h1>
          <p className="mx-3 mb-4">
            Alla ricerca di opportunità che mi permettano di
            continuare a crescere come Sviluppatore Software e contribuire al
            successo di un' azienda nel settore Tech. Dinamico, orientato ai
            risultati e appassionato di apprendimento continuo, sempre pronto ad
            affrontare nuove sfide e superare le aspettative.
          </p>
          <div className={styles.imgContainer}>
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
        </div>
        <div>
          <img className={styles.profilo} src="/src/assets/images/imageAle.png" alt="" />
        </div>
      </div>
      )
    }

    export default Hero;