import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/sources/layout/motion";

const SectionHeading = ({ title, subTitle, highlight, id, className }) => {
  return (
    <div id={id}>
      <motion.span
        variants={fadeIn("up", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="uppercase xs:text-lg text-md font-semibold"
      >
        {highlight}
      </motion.span>
      <motion.h1
        initial={{
          y: "20%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.3,
            type: "",
            ease: "easeOut",
          },
        }}
        className={`text-[50px] xs:text-[60px] lg:text-[70px] font-extrabold -my-3 ${className}`}
      >
        {title}
      </motion.h1>
      {subTitle && (
        <motion.span
          variants={fadeIn("up", "", 1, 1)}
          initial="hidden"
          whileInView="show"
        >
          {subTitle}
        </motion.span>
      )}
    </div>
  );
};

export default SectionHeading;
