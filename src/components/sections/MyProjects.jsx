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
      >
        <h1 className="p-3 text-center fw-bold">MY PROJECTS</h1>
        <hr style={{ margin: "0 auto 10rem", width: "70%" }} />
      </motion.div>
      <div className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <div className={styles.description}>
            <button>
              <a
                href="https://github.com/AlessandroB92/Travel_Nest"
                target="blank"
              >
                Travel Nest
              </a>
            </button>
            <div>
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
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <div className={styles.description}>
            <button>
              <a
                href="https://github.com/AlessandroB92/react-portfolio"
                target="blank"
              >
                Netflix Clone
              </a>
            </button>
            <div>
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
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <div className={styles.description}>
            <button>
              <a
                href="https://github.com/AlessandroB92/react-portfolio"
                target="blank"
              >
                In Forno Pizzeria
              </a>
            </button>
            <div>
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
