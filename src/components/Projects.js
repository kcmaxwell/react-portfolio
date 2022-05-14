import React from "react";
import { projects } from "../constants/Portfolio";
import Project from "./Project";
import uniqid from "uniqid";

export default function Projects() {
  return (
    <div className="section projects-section grid-container" id="projects">
      {projects.map((project) => {
        return <Project key={uniqid()} project={project} />;
      })}
    </div>
  );
}
