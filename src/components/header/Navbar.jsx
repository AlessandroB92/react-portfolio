import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import { FaBars, FaTimes, FaArrowCircleUp } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Nascondi navbar
      } else {
        setIsVisible(true); // Mostra navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        className={`${styles.header}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }} // Anima la navbar
        transition={{ duration: 0.3 }}
      >
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
      </motion.header>
    </>
  );
}

export default Navbar;
