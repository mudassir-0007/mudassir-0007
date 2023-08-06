import React from "react";
import SectionHeading from "./UI/SectionHeading";
import GlassBox from "./UI/GlassBox";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../layout/motion";
import Section from "./UI/Section";
import { htmlcss, nextjs, reactjs, tailwindcss } from "../assets/svg";
import { keySkills } from "../constant";

const About = () => {

  return (
    <Section id="about">
      <SectionHeading title="Overview." highlight="Introduction" />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="mt-10 lg:w-2/3"
        viewport={{ once: true, amount: 0.25 }}
      >{`I'm a skilled FullStack Web Developer with experience in JavaScript and expertise in frameworks/library like HTML, CSS, JS, React.js, Bootstap, Node.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficientm scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!`}</motion.p>

      <div className="mt-10 flex flex-wrap gap-5">
        {keySkills.map((elem, index) => (
          <Tilt key={elem.id} className="sm:w-fit w-full">
            <GlassBox img={elem.img} index={index} label={elem.label} />
          </Tilt>
        ))}
      </div>
    </Section>
  );
};

export default About;
