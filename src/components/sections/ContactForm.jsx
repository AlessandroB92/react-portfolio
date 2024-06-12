import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import styles from "../header/Button.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";

function ContactForm() {
  emailjs.init("D6tmn39cooV8v3wql");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("portfolio_contact", "portfolio_template", e.target).then(
      (result) => {
        console.log("Email inviata con successo:", result.text);
      },
      (error) => {
        console.error("Errore durante l'invio dell'email:", error);
        alert("Errore durante l'invio dell'email.");
      }
    );
    e.target.reset();
  };

  return (
    <div className="container d-flex">
      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="text-white fs-3">Nome</label>
          <input type="text" name="from_name" />
          <label className="text-white fs-3">Email</label>
          <input type="email" name="from_email" />
          <label className="text-white fs-3">Messaggio</label>
          <textarea name="message" />
          <input
            className={styles.Button}
            type="submit"
            value="INVIA MESSAGGIO"
          />
        </form>
      </div>
      <div className="container">
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
      </div>
    </div>
  );
}

export default ContactForm;
