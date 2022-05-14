import React from "react";
import { openSource } from "../constants/Portfolio";
import Project from "./Project";
import uniqid from "uniqid";

export default function OpenSource() {
  return (
    <div
      className="section open-source-section grid-container"
      id="open-source"
    >
      {openSource.map((project) => {
        return <Project key={uniqid()} project={project} />;
      })}
    </div>
  );
}
