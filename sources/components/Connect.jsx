import React, { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Section from "./UI/Section";
import SectionHeading from "./UI/SectionHeading";
import { motion } from "framer-motion";
import { slideIn } from "../layout/motion";
import ChatCanvas from "../assets/3d/ChatCanvas";

const Connect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section
      id="connect"
      className="relative flex item-center justify-between items-center lg:flex-row flex-col"
    >
      <div className="w-full">
        <SectionHeading title="Connect Me." highlight="Ways to reach me" />
        <motion.div
          variants={{
            hidden: {
              y: "50%",
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "",
                duration: 1,
                delay: 0.5,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          className="flex items-center gap-2 mt-5 pl-2"
        >
          <BsLinkedin
            className="text-[40px] text-[#255c9f] cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/shaik-mohammed-mudassir-611277259", "_blank")
            }
          />
          <FaGithubSquare
            className="text-[46px] text-[#2f3031] cursor-pointer"
            onClick={() =>
              window.open("https://github.com/mudassir-0007/", "_blank")
            }
          />
          <GrInstagram
            className="text-[41px] text-[#cf3a6e] cursor-pointer"
            onClick={() =>
              window.open("https://instagram.com/mudassir__mm", "_blank")
            }
          />
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "", 0, 0.5)}
        initial="hidden"
        whileInView="show"
        className="!w-full h-[450px]"
      >
        <ChatCanvas isMobile={isMobile} />
      </motion.div>
    </Section>
  );
};

export default Connect;
