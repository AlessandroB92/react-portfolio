import CV from "../../assets/images/Alessandro-Basile-CV.pdf";
import { motion } from "framer-motion";

function CvButton () {
  return (
    <motion.div whileTap={{ scale: 0.85 }}>
      <button><a href={CV} download>
        DOWNLOAD CV
      </a></button>
    </motion.div>
  );
}

export default CvButton;
