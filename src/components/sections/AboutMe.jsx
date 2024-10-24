import { motion } from 'framer-motion';
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, x: -200 }}  // Inizialmente nascosto e spostato verso il basso
      whileInView={{ opacity: 1, x: 0 }}  // Quando visibile, torna in posizione e appare
      transition={{ duration: 1.5 }}  // Durata della transizione
      viewport={{ once: false }}  // Animazione ripetuta ogni volta che l'elemento è visibile
    >
      <div className={styles.description}>
        <h1 className="m-3 fw-bold">CHI SONO</h1>
        <hr className="mx-3" />
        <p className="mx-3 my-4 py-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, enim mollitia eveniet debitis eius possimus, nemo, ipsa quod beatae cum dolores cumque maxime laudantium necessitatibus. Corrupti, iure? Quibusdam veritatis harum cumque ratione aliquid exercitationem quae adipisci odit autem rem, cupiditate deserunt accusamus, perferendis earum nobis quas sed possimus tempore magnam.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;