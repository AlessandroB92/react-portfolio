import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
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
  );
}

export default MyNavbar;
