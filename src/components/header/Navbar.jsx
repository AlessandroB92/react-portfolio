import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes, FaArrowCircleUp } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Stato per la visibilità della navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Ultima posizione di scroll

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Aggiungi un listener per lo scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scorrendo verso il basso
        setIsVisible(false);
      } else {
        // Scorrendo verso l'alto
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Rimuovi il listener alla pulizia del componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isVisible]); // Includi lastScrollY e isVisible nelle dipendenze

  return (
    <>
      <header className={`${styles.header} ${!isVisible ? styles.hidden : styles.visible}`}>
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
              <a href="/" onClick={closeMenu}>
                <span className={styles.brandspan}>A</span>less
                <span className={styles.brandspan}>A</span>ndro
              </a>
            </h1>
            <ul className={styles.navul}>
              <li className={styles.navli}>
                <a href="/" onClick={closeMenu}>
                  <FaArrowCircleUp className={styles.up} />
                </a>
              </li>
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
    </>
  );
}

export default Navbar;
