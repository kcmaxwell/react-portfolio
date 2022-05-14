import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { navbar } from "../constants/Portfolio";
import uniqid from "uniqid";

export default function Navbar() {
  return (
    <nav className="nav">
      <div>
        <ul className="nav-list">
          {navbar.map((navItem) => {
            return (
              <li key={uniqid()} className="nav-list-item">
                <a href={navItem.link} className="nav-link">
                  {navItem.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
