import React from "react";

export default function Project({ project }) {
  return (
    <div className="grid-item">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a className="button-link" href={project.code}>
        <span type="button" className="button">
          GitHub
        </span>
      </a>
      <a className="button-link" href={project.demo}>
        <span type="button" className="button">
          Live Demo
        </span>
      </a>
    </div>
  );
}
