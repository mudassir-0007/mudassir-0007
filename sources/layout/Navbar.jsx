import React, { useContext, useEffect, useState } from "react";
import { TfiShortcode } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { fadeIn } from "./motion";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const concernedElement = document.getElementById("sidebar");

    document.addEventListener("mousedown", (event) => {
      if (concernedElement.contains(event.target)) {
      } else {
        setOpen(false);
      }
    });
  }, [open]);

  const handleLink = (id) => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth" });
  };

  const isOnHome = router.asPath === "/";

  return (
    <div className="overflow-hidden">
      <Sidebar
        id="sidebar"
        open={open}
        setOpen={setOpen}
        handleLink={handleLink}
      />
      <motion.nav
        variants={fadeIn("down", "", 0.75, 0.5)}
        initial="hidden"
        whileInView="show"
        className="fixed w-full top-0 flex justify-between items-center backdrop-blur-sm z-40"
      >
        <div
          className="p-4 flex items-center gap-2 cursor-pointer"
          onClick={() => (isOnHome ? handleLink("front") : router.push("/"))}
        >
          <TfiShortcode className="text-[40px]" />
          <span className="font-bold text-[18px]">Shaik Mohammed Mudassir</span>
        </div>

        {isOnHome ? (
          <div className="p-4 cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? (
              <IoCloseSharp className="text-[30px]" />
            ) : (
              <CgMenuRight className="text-[30px]" />
            )}
          </div>
        ) : (
          <div
            className="p-4 cursor-pointer hover:text-cyan-600 duration-300"
            onClick={() => router.push("/")}
          >
            Back
          </div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
