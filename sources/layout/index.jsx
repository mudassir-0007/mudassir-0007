import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const Layout = ({ children }) => {
  return (
    <div style={font.style} className="select-none">
      <div className="w- bg-gradient-to-r from-rose-100 to-teal-100 ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
