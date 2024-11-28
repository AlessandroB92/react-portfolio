import { motion } from 'framer-motion';
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      <div className={styles.description}>
        <h1 className="m-3 fw-bold">CHI SONO</h1>
        <hr className="mx-3" />
        <p className="mx-3 my-4 py-5">
        Ciao! Sono Alessandro Basile, uno <span>SVILUPPATORE FULL STACK</span> con una profonda passione per la tecnologia e un forte desiderio di migliorare continuamente il modo in cui le persone interagiscono con il digitale. Quando non sono impegnato a scrivere codice o a creare nuove soluzioni, mi trovi probabilmente in sella alla mia moto, in palestra a superare i miei limiti, o a esplorare le ultime tendenze tech. La mia missione è combinare il mio entusiasmo per l`innovazione con competenze tecniche solide per creare esperienze digitali che facciano davvero la differenza.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;