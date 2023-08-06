import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../layout/motion";

const TypeEffect = ({ text, effect, pointer }) => (
  <motion.span variants={textContainer}>
    {effect
      ? Array.from(text).map((elem, ind) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * ind }}
            key={ind}
          >
            {elem === " " ? "\u00A0" : elem}
          </motion.span>
        ))
      : text}

    {pointer && <span className="animate-ping">|</span>}
  </motion.span>
);

export default TypeEffect;
