import React from "react";
import css from "./index.module.css";
import { motion } from "framer-motion";
import { slideIn } from "@/sources/layout/motion";

const PhoneFrame = ({ src, label }) => {
  return (
    <motion.div
      variants={slideIn("right", "", 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${css.smartphone} shadow-xl`}
    >
      <div className={css.content}>
        {src ? (
          <iframe className={css.iframe} title={label} src={src}></iframe>
        ) : (
          <div className="flex items-center justify-center h-full">{label}</div>
        )}
      </div>
    </motion.div>
  );
};

export default PhoneFrame;
