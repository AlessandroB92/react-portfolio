import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion"; // Importa Framer Motion
import "./ContactForm.css";
import styles from "../header/Button.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";

function ContactForm() {
  const [error, setError] = useState(""); // Stato per gestire l'errore
  emailjs.init("D6tmn39cooV8v3wql");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Verifica se i campi sono vuoti
    if (!form.from_name.value || !form.from_email.value || !form.message.value) {
      setError("Compila tutti i campi"); // Imposta il messaggio di errore
      return; // Interrompe l'invio del modulo
    }

    setError(""); // Reset dell'errore
    emailjs.sendForm("portfolio_contact", "portfolio_template", form).then(
      (result) => {
        console.log("Email inviata con successo:", result.text);
      },
      (error) => {
        console.error("Errore durante l'invio dell'email:", error);
        alert("Errore durante l'invio dell'email.");
      }
    );
    form.reset();
  };

  return (
    <div id="contactModule" className="container h-100 d-flex justify-content-center align-items-center">
    <motion.div
      className="container d-flex"
      initial={{ opacity: 0, x: -200 }}  // Inizia nascosto e spostato verso il basso
      whileInView={{ opacity: 1, x: 0 }}  // Quando visibile, si sposta in posizione e appare
      transition={{ duration: 1 }}  // Durata della transizione
      viewport={{ once: false }}  // Animazione ripetuta ogni volta che l'elemento è visibile
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, x: -100 }}  // Inizialmente nascosto e spostato a sinistra
        whileInView={{ opacity: 1, x: 0 }}  // Quando visibile, si sposta in posizione
        transition={{ duration: 1 }}  // Durata della transizione
        viewport={{ once: false }}  // Ripete l'animazione on scroll
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger text-center fs-2" role="alert">{error}</div>}

          <label className="text-white fs-3">Nome
            <input type="text" name="from_name" />
          </label>
          
          <label className="text-white fs-3">Email
            <input type="email" name="from_email" />
          </label>
          
          <label className="text-white fs-3">Messaggio
            <textarea name="message" />
          </label>
          
          <input
            className={styles.Button}
            type="submit"
            value="INVIA MESSAGGIO"
          />
        </form>
      </motion.div>

    </motion.div>
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0 }}  // Inizialmente nascosto e spostato a destra
        whileInView={{ opacity: 1, scale: 1 }}  // Quando visibile, si sposta in posizione
        transition={{ duration: 1, delay: 1 }}  // Durata della transizione
        viewport={{ once: false }}  // Ripete l'animazione on scroll
      >
        <h2 className="text-center">GET IN TOUCH!</h2>
        <ul className="social-list">
          <li className="my-3 text-center">
            <a
              href="https://github.com/AlessandroB92"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-2"
            >
              <FaGithub className="social" />
              <br />
              GitHub
            </a>
          </li>
          <li className="my-3 text-center">
            <a
              href="https://www.linkedin.com/in/alessandro-basile-4a65bb192/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-2"
            >
              <FaLinkedin className="social" />
              <br />
              LinkedIn
            </a>
          </li>
          <li className="my-3 text-center">
            <a
              href="https://www.instagram.com/alessandro_b92/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-2"
            >
              <FaInstagramSquare className="social" />
              <br />
              Instagram
            </a>
          </li>
          <li className="my-3 text-center">
            <a
              href="https://www.facebook.com/Alessandrobasilebasile/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-2"
            >
              <FaFacebook className="social" />
              <br />
              FaceBook
            </a>
          </li>
        </ul>
      </motion.div>
      </div>
  );
}

export default ContactForm;
