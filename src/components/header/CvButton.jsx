import styles from "./Button.module.css";
import CV from "../../assets/images/Alessandro-Basile-CV.pdf";
import { motion } from "framer-motion";

function CvButton () {
  return (
    <motion.div className={styles.cvContainer} whileTap={{ scale: 0.85 }}>
      <a className={styles.Button} href={CV} download>
        DOWNLOAD CV
      </a>
    </motion.div>
  );
}

export default CvButton;
