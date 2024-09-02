"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-col relative gap-y-10 items-center justify-center w-full  h-full">
      <div className=" w-auto h-auto top-0 z-[5] py-7">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center translate-y-[-50px]  z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto:">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>
        <div className="Welcome-box ox-[15px] py-[4px] x-20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="text-[#b49bff] px-10 py-2 text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className=" z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure Data With End to End Encryption
        </div>
      </div>
      <div className="w-full h-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-[800px] translate-y-[-15%] absolute md:translate-y-[-20%]"
          src="/encryption.webm"
        ></video>
      </div>
    </div>
  );
};

export default Encryption;
