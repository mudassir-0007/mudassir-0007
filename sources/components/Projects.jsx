import React, { useState } from "react";
import Section from "./UI/Section";
import SectionHeading from "./UI/SectionHeading";
import Accordion from "./UI/Accordion";
import { projects } from "../constant";
import PhoneFrame from "./UI/PhoneFrame";

const Projects = () => {
  const [selected, setSelected] = useState({
    link: "/",
    label: "Shaik Mohammed Mudassir Portfolio",
  });
  return (
    <Section id="projects">
      <SectionHeading title="Projects." highlight="What i created" />

      <div className="mt-10 grid lg:grid-cols-2 gap-10">
        <Accordion data={projects} setSelected={setSelected} />
        <PhoneFrame src={selected.link} label={selected.label} />
      </div> 
    </Section>
  );
};

export default Projects;
