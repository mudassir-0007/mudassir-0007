import Image from "next/image";
import React from "react";
import qr from "@/sources/assets/img/qrcode.png";
import { motion } from "framer-motion";
import SectionHeading from "@/sources/components/UI/SectionHeading";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="py-20 lg:px-20 sm:px-10 px-5 ">
        <SectionHeading title="Hire Me." />

        <div className="flex md:flex-row flex-col gap-5 mt-5">
          <motion.div
            className="!z-50 relative w-[300px]"
            whileHover={{
              scale: 1.4,
              marginLeft: "100px",
              
            }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <div className="absolute font-bold z-50 bottom-0 text-center w-full whitespace-nowrap" >
              Call Now
            </div>
            <Image
              src={qr}
              alt=""
              className="max-w-[300px] max-h-[300px] h-full w-full aspect-square rounded-2xl drop-shadow-2xl" 
            />
            
          </motion.div>

          <div className="flex-1 bg-[#00000019] border-2 border-[#ffffffa7] border-solid rounded-3xl drop-shadow-2xl p-5">
            <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
              <span className="font-semibold">Available For:</span>
              <span className="p-1 px-2 text-sm rounded-lg text-white bg-[#141414]">
                Job (First Choice: Remote)
              </span>
              <span className="p-1 px-2 text-sm rounded-lg text-white bg-[#141414]">
                Freelance Work
              </span>
            </div>

            <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-5">
              <span className="font-semibold">Join/Start:</span>
              <span className="p-1 px-2 text-sm rounded-lg text-white bg-[#141414]">
                Immediately
              </span>
            </div>

            <div className="flex items-center flex-wrap gap-3 mt-5">
              <span className="font-semibold">Connect Via:</span>

              <BsLinkedin
                className="text-[30px] text-[#255c9f] cursor-pointer"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/shaik-mohammed-mudassir-611277259", "_blank")
                }
              />
              <BsWhatsapp
                className="text-[30px] text-[#2fa265] cursor-pointer"
                onClick={() =>
                  window.open("https://wa.me/917013769319", "_blank")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
