import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div
          className={`${styles.menutoggle} ${isOpen && styles.menuopen}`}
          id="hamburger"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`${styles.overlay} ${isOpen && styles.menuopen}`}
          onClick={closeMenu}
        ></div>
        <div className={`${styles.container} ${isOpen && styles.menuopen}`}>
          <nav className={`${styles.nav} ${isOpen && styles.menuopen}`}>
            <h1 className={styles.brand}>
              <a href="#" onClick={closeMenu}>
                <span className={styles.brandspan}>A</span>less
                <span className={styles.brandspan}>A</span>ndro
              </a>
            </h1>
            <ul className={styles.navul}>
              <li className={styles.navli}>
                <a className={styles.nava} href="#About" onClick={closeMenu}>
                  About Me
                </a>
              </li>
              <li className={styles.navli}>
                <a className={styles.nava} href="#Projects" onClick={closeMenu}>
                  My Projects
                </a>
              </li>
              <li className={styles.navli}>
                <a className={styles.nava} href="#Contacts" onClick={closeMenu}>
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <div className={styles.hero}>
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
      </div> */}
    </>
  );
}

export default Navbar;
