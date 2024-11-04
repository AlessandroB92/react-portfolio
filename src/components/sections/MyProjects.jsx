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
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <div>
            <h1 className="mx-3 mb-3 fw-bold">MY PROJECTS</h1>
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
            <hr className="mx-3" />
            <div>
              <h4 className="text-center m-5 fs-2 fw-bold">
                <a
                  href="https://github.com/AlessandroB92/Travel_Nest"
                  target="blank"
                >
                  Travel Nest
                </a>
              </h4>
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
          <hr className="mx-3" />
            <div>
              <h4 className="text-center m-5 fs-2 fw-bold">
                <a
                  href="https://github.com/AlessandroB92/react-portfolio"
                  target="blank"
                >
                  Netflix Clone
                </a>
              </h4>
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
          <hr className="mx-3" />
            <div>
              <h4 className="text-center m-5 fs-2 fw-bold">
                <a
                  href="https://github.com/AlessandroB92/react-portfolio"
                  target="blank"
                >
                  Netflix Clone
                </a>
              </h4>
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
