import React from "react";
import { skills } from "../constants/Portfolio";

export default function Skills() {
  return (
    <div className="skills">
      <ul className="skills-list">
        {skills.map((skill) => {
          return <li className="skill">{skill}</li>;
        })}
      </ul>
    </div>
  );
}
