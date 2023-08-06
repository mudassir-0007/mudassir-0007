import React from "react";
import { motion } from "framer-motion";

const Sidebar = ({ open, handleLink, id }) => {
  const items = [
    {
      label: "Home",
      id: "front",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "Experience",
      id: "experience",
    },
    {
      label: "Skills",
      id: "skills",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Connect",
      id: "connect",
    },
  ];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      animate={
        open
          ? {
              width: "150px",
              height: "fit-content",
              y: "0px",
            }
          : { width: "0px", height: "0px", y: "-100px" }
      }
      className="fixed top-14 rounded-md p-1.5 right-5 z-50 bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
    >
      {items.map((elem) => (
        <div
          key={elem.id}
          className="hover:bg-[#c0c0c0] px-3 duration-300 py-1 rounded-md cursor-pointer"
          onClick={() => {
            handleLink(elem.id);
          }}
        >
          {elem.label}
        </div>
      ))}
    </motion.div>
  );
};

export default Sidebar;
