"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 md:flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[16px] border border-[#7042f88b] opacity-[0.9] bg-[#030014]  "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="md:bg-transparent  text-purple-200 text-[13px]">
            FullStack Developer
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-2xl md:text-5xl text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-4xl leading-relaxed tracking-wide md:tracking-[2px] ">
            I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-purple-500 to-cyan-500">
              {" "}
              Boda Santhosh{" "}
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with Experience in Website
          Mobile, and Software Development. Check out My Project and Skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="/Boda-Santhosh-Job-Resume.pdf"
        >
          Download CV
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icon"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
