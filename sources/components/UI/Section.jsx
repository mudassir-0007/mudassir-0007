import React from "react";

const Section = ({ children, id, className }) => {
  return (
    <section
      className={`p-10 pt-20 lg:p-20 overflow-hidden ${className}`}
      id={id || ""}
    >
      {children}
    </section>
  );
};

export default Section;
