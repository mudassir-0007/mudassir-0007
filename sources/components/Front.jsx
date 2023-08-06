import React from "react";
import { motion } from "framer-motion";
import coder from "../assets/svg/coder.svg";
import Image from "next/image";
import TypeEffect from "./TypeEffect";
import { fadeIn } from "../layout/motion";
import codebg from "../assets/img/code_bg.jpg";
import ChatCanvas from "../assets/3d/ChatCanvas";
import Router from "next/router";

const Front = () => {
  const handleLink = (id) => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="front"
      className="relative px-5 bg-gradient-to-tl from-slate-600 to-slate-200 sm:px-10 h-screen overflow-hidden flex sm:items-center items-start justify-center"
    >
      <Image
        src={codebg}
        className=" opacity-[15%] absolute bottom-0 z-0 text-center h-screen w-[1440px] bg-center"
        alt="code"
      />
      <div className="flex items-center  justify-between md:flex-row flex-col gap-10 md:mt-0 mt-32">
        <div>
          <motion.h1
            variants={fadeIn("right", "spring", 0, 1.75)}
            initial="hidden"
            whileInView="show"
            className="font-extrabold text-6xl lg:text-[80px]"
          >
            Hi! {`I'm`} <TypeEffect text="Mudassir" pointer />
          </motion.h1>
          <motion.div
            variants={fadeIn("right", "spring", 0.1, 1.75)}
            initial="hidden"
            whileInView="show"
          >
            FullStack Developer
          </motion.div>

          <motion.div
            variants={fadeIn("right", "spring", 0.2, 1.75)}
            initial="hidden"
            whileInView="show"
            className="flex items-center gap-3 mt-3"
          >
            <div
              onClick={() => handleLink("connect")}
              className="bg-[#212122] hover:bg-[#353535] text-white p-2 px-5 rounded-md cursor-pointer duration-300"
            >
              Connect
            </div>
            <div
              onClick={() => Router.push("/hire-me")}
              className="bg-[#212122] hover:bg-[#ffffff] hover:text-[#212122] text-white p-2 px-5 rounded-md cursor-pointer duration-300"
            >
              Hire Me
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", "spring", 0, 1.75)}
          initial="hidden"
          whileInView="show"
        >
          <Image
            draggable={false}
            src={coder}
            className="w-full h-fit max-w-[600px]"
            alt="Sourabh Kumhar - Coding"
          />
        </motion.div>
      </div>

      {/* Scroll Down button */}
      <div className="absolute sm:bottom-7 bottom-10 right-0 w-full flex justify-center items-center">
        <div
          className="w-[20px] h-[50px] rounded-3xl border-4 border-[#d3d3d3] border-solid flex justify-center items-start p-1 cursor-pointer"
          onClick={() => handleLink("about")}
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-4 h-4 rounded-full bg-[#d3d3d3] mb-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Front;
