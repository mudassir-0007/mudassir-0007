import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const GlassBox = ({ children, img, label, index }) => {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: 0.5 * index,
          duration: 1,
          // ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
      }}
      viewport={{ once: true }}
      className="flex justify-center items-center sm:w-[260px] w-full sm:h-[300px] h-[250px] rounded-xl backdrop-blur-sm bg-[#ffffff0a] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      {img && (
        <Image
          draggable={false}
          src={img}
          alt=""
          className="w-[200px] h-fit"
        />
      )}
      {children}

      {label && <div className="absolute bottom-5">{label}</div>}
    </motion.div>
  );
};

export default GlassBox;
