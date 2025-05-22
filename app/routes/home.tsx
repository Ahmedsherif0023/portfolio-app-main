import type { Route } from "./+types/home";
import Navbar from "../components/navbar/Navbar";
import image from "../../public/ava.png";
import { FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";

import Services from "../components/services/services";
import About from "../components/about/about";
import ProjectsContainer from "../components/projects/projects";

import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Contact } from "~/components/contact/contact";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shefo's App" },
    { name: "description", content: "Shefo's Portfolio app" },
  ];
}

export default function Home() {



  return (
    <div className="home-container">
      <div className="h-container" id="home">
        <Navbar />
        <div className="main flex-center">
          <div className="main-h1">
            <div className="headdd">Hi, I'm</div>
            <div className="headddd">Ahmed Sherif</div>
            <h2>React.Js Dev</h2>

            <div className="main-btns">
              <div className="call-btn view-projects">
                <a href="#projects">View projects</a>
              </div>
              <div className="call-btn resume">
                <a
                  href="https://drive.google.com/file/d/1EuW1V634lJ3vUq6rT7SKC-YUXU7_loIU/view?usp=drive_link"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="socials">
              <a href="https://www.instagram.com/ishefo0" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://wa.me/+201274375560" target="_blank">
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmedsheriif/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/Ahmedsherif0023" target="_blank">
                <FaGithub />
              </a>
            </div>
            <div className="experience">
              <div className="exp">
                <h1>2+</h1>
                <p>Years of Experience</p>
              </div>
              <div className="breakk"></div>
              <div className="exp">
                <h1>50+</h1>
                <p>Projects Completed</p>
              </div>
              <div className="breakk"></div>
              <div className="exp">
                <h1>100+</h1>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="main-img">
            <img src={image} alt="image" style={{ filter: "grayscale(80%)" }} />
          </div>
        </div>
      </div>

    <div className="Services-container" id="services">
      <Services />
    </div>

<div className="About-container" id="about">
  <About />
</div>

<div className="Projects-container" id="projects">
  <ProjectsContainer />
</div>

    </div>
  );
}
