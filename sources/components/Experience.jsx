import React from "react";
import Section from "./UI/Section";
import SectionHeading from "./UI/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "../constant";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: experience.bg || "#1d1836",
        color: experience.color || "#fff",
      }}
      contentArrowStyle={{ borderRight: `7px solid ${experience.bg}` }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg || "white" }}
      icon={
        <div className="flex justify-center items-center h-full w-full">
          <Image
            draggable={false}
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, ind) => (
          <li
            key={ind}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading title="Experience." highlight="What I have done so far" />

      <div className="mt-10 flex flex-col">
        <VerticalTimeline lineColor="#1D1836" >
          {experiences.map((exp, ind) => {
            return <ExperienceCard key={ind} experience={exp} />;
          })}
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
