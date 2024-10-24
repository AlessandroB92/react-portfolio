import { motion } from 'framer-motion';
import styles from './MyProjects.module.css';
import TravelNestVideo from '../../assets/images/TravelNest_Presentazione.mp4'; // Import diretto del video

const MyProjects = () => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, x: -200 }}  // Inizialmente nascosto e spostato verso destra
      whileInView={{ opacity: 1, x: 0 }}  // Quando visibile, torna in posizione e appare
      transition={{ duration: 1.5 }}  // Durata della transizione
      viewport={{ once: false }}  // Animazione ripetuta ogni volta che l'elemento è visibile
    >
      <div className={styles.description}>
        <h1 className="m-3 fw-bold">MY PROJECTS</h1>
        <hr className="mx-3" />
        <div className="m-3">
          <h4 className="text-center m-5 fs-2 fw-bold">
            <a href='https://github.com/AlessandroB92/react-portfolio' target='blank'>Travel Nest</a>
          </h4>
          <video width="400" controls>
            <source src={TravelNestVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default MyProjects;
