import React from "react";
import { skills } from "../constants/Portfolio";
import uniqid from "uniqid";

export default function Skills() {
  return (
    <div className="section skills-section skills" id="skills">
      <ul className="skills-list">
        {skills.map((skill) => {
          return (
            <li key={uniqid()} className="skill">
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
