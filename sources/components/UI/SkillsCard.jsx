import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ img, label }) => {
  const [hover, setHover] = useState(false);

  const variants = {
    open: { height: "100px" },
    closed: { height: 0 },
  };

  return (
    <div
      className="relative"
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <div className="p-5 bg-[#dedede74] rounded-xl border-2 border-solid border-[#ffffff]">
        <Image
          draggable={false}
          src={img}
          alt={label}
          className="w-full h-[200px]"
        />
      </div>
      <motion.div
        variants={variants}
        initial="closed"
        animate={hover ? "open" : "closed"}
        className="absolute bottom-0 rounded-b-xl w-full bg-gradient-to-b from-[#ffffff00] to-[#797979] h-[100px] flex justify-center items-center text-white text-[20px] overflow-hidden"
      >
        {label}
      </motion.div>
    </div>
  );
};

export default SkillsCard;
