"use client";
import { Socials } from "@/constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            width={70}
            height={70}
            alt="NavLogo"
            className="cursor-pointer hover:animate-spin"
          />
          <span className="font-bold ml-[10px] w-[200px] md:w-full  text-gray-300">
            Boda Santhosh
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 relative">
          {state ? (
            <XMarkIcon
              className="h-[30px] w-[30px] text-gray-300 font-bold cursor-pointer md:hidden block absolute right-0"
              onClick={() => setState(false)}
            />
          ) : (
            <Bars3Icon
              className="h-[30px] w-[30px] text-gray-300 cursor-pointer md:hidden block absolute right-0 "
              onClick={() => setState(true)}
            />
          )}
          <div className="md:flex  items-center justify-between w-full h-auto border border-[#7042f861] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200  hidden">
            <a href="#about-me" className="cursor-pointer">
              About-Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="md:flex flex-row gap-6 hidden">
          {Socials.map((social) => {
            return (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={30}
                height={30}
              />
            );
          })}
        </div>
      </div>
      {state && (
        <motion.div
          variants={slideInFromTop}
          className="w-full bg-[#030014] h-fit flex flex-col gap-4 px-3 py-3 animate-pulse md:hidden"
        >
          <a
            href="#about-me"
            className="cursor-pointer text-white w-full bg-[#110a34] px-2 py-3 rounded-xl"
          >
            About-Me
          </a>
          <a
            href="#skills"
            className="cursor-pointer text-white w-full bg-[#110a34] px-2 py-3 rounded-xl"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="cursor-pointer text-white w-full bg-[#110a34] px-2 py-3 rounded-xl"
          >
            Projects
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
