import React from "react";
import { projects } from "../constants/Portfolio";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="grid-container">
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
}
