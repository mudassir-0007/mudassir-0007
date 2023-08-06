import React from "react";
import Section from "./UI/Section";
import SectionHeading from "./UI/SectionHeading";
import { skills } from "../constant";
import Slider from "./UI/Slider";
import SkillsCard from "./UI/SkillsCard";
import { motion } from "framer-motion";
import { slideIn } from "../layout/motion";

const Skills = () => {
  return (
    <Section id="skills">
      <SectionHeading title="Skills." highlight="What I know" />

      <motion.div
        variants={slideIn("left", "", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Slider className="mt-10">
          {skills.map((elem, index) => {
            return <SkillsCard img={elem.img} label={elem.label} key={index} />;
          })}
          <div></div>
        </Slider>
      </motion.div>
    </Section>
  );
};

export default Skills;
