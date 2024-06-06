import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import styles from "../header/Button.module.css";

const ContactForm = () => {
  emailjs.init('D6tmn39cooV8v3wql');
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolio_contact', 'portfolio_template', e.target)
      .then((result) => {
        console.log('Email inviata con successo:', result.text);
      }, (error) => {
        console.error('Errore durante l\'invio dell\'email:', error);
        alert('Errore durante l\'invio dell\'email.');
      });
      e.target.reset();
  };

  return (
    <div className='container d-flex align-items-center flex-start w-100 h-100'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className='text-white fs-3'>Nome</label>
        <input type="text" name="from_name" />
        <label className='text-white fs-3'>Email</label>
        <input type="email" name="from_email" />
        <label className='text-white fs-3'>Messaggio</label>
        <textarea name="message" />
        <input className={styles.Button} type="submit" value="INVIA MESSAGGIO" />
      </form>
    </div>
  );
};

export default ContactForm;
