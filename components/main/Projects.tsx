import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full  grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        <ProjectCard
          src="/Merntodo.png"
          title="Mern Stack Todo App"
          description="A full-stack MERN application with  CRUD operations."
        />
        <ProjectCard
          src="/portfolio.png"
          title="Santhosh Portfolio"
          description="A full-stack portfolio"
        />
        <ProjectCard
          src="/trackingApp.png"
          title="User Login Tracking App"
          description="React Based Application used for tacking user Login information"
        />
        <ProjectCard
          src="/carRentapp.png"
          title="Car Rent Application"
          description="Next JS Based Application used for Booking a Car "
        />
      </div>
    </div>
  );
};

export default Projects;
