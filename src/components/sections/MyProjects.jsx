import { motion } from "framer-motion";
import styles from "./MyProjects.module.css";
import TravelNestVideo from "../../assets/images/TravelNest_Presentazione.mp4";
import Netflixclone from "../../assets/images/Netflix_clone.mp4";
import InForno from "../../assets/images/InForno_Pizzeria.mp4";

const MyProjects = () => {
  return (
    <div className={styles.hero}>
        <motion.div
        className={styles.hero}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        ><div className={styles.description}>
            <h1 className="p-3 text-center fw-bold">MY PROJECTS</h1>
            <hr className="mx-3" />
          </div>
        </motion.div>
      <div className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5}}
          viewport={{ once: false}}
        >
          <div className={styles.description}>
            <div>
              <h2 className="text-center fs-1 m-3 fw-bold">
                <a
                  href="https://github.com/AlessandroB92/Travel_Nest"
                  target="blank"
                >
                  Travel Nest
                </a>
              </h2>
              <video controls>
                <source src={TravelNestVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className={styles.description}>
            <div>
              <h2 className="text-center fs-1 m-3 fw-bold">
                <a
                  href="https://github.com/AlessandroB92/react-portfolio"
                  target="blank"
                >
                  Netflix Clone
                </a>
              </h2>
              <video controls>
                <source src={Netflixclone} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <div className={styles.description}>
            <div>
              <h2 className="text-center fs-1 m-3  fw-bold">
                <a
                  href="https://github.com/AlessandroB92/react-portfolio"
                  target="blank"
                >
                  In Forno Pizzeria
                </a>
              </h2>
              <video controls>
                <source src={InForno} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProjects;
