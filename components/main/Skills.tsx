import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvide from "../sub/SkillDataProvide";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => {
          return (
            <SkillDataProvide
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          );
        })}
        {Backend_skill.map((image, index) => {
          return (
            <SkillDataProvide
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          );
        })}
        {Full_stack.map((image, index) => {
          return (
            <SkillDataProvide
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          );
        })}
        {Other_skill.map((image, index) => {
          return (
            <SkillDataProvide
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          );
        })}
      </div>
      <div className="w-full h-full absolute ">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover ">
          <video
            className="w-full h-auto "
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Skills;
