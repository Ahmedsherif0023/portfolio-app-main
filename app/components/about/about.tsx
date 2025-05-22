import React from "react";
import image from "../../public/ava.png";
import { FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

function about() {
  return (
    <div className="AboutContainer">
      <h1>About Me</h1>
      <p>Front-End developer specializing in React.JS</p>
      <div className="container-div">
        <div className="container-img">
          <img
            src={image}
            alt="my image"
            style={{ filter: "grayscale(80%)" }}
          />
        </div>
        <div className="container-about">
          <p>
            I'm a front-end web developer with a passion for crafting clean,
            responsive, and minimalistic web experiences. <br />
            As a freelancer, I specialize in building modern landing pages,
            portfolio sites, and e-commerce shops using React.js, Next.js, and
            Node.js.
            <br />
            Started coding as a hobby but quickly grew into a full-on love for
            solving real-world problems and bringing ideas to life through code.{" "}
            <br />I focus on writing efficient code and creating sleek UIs that
            feel as good as they look — always aiming to blend performance with
            design in every project I build.
          </p>
        </div>
      </div>
      <div className="Call-btn">
        <a
          href="https://drive.google.com/file/d/1v0qk2X3x4g7J6G5Z8z5z5z5z5z5z5z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <FiDownload />Download CV
        </a>
      </div>

   <div className="progress-icons">
      <div className="tech-item">
        <FaReact size={40} color="#61DBFB" />
        <div className="progress-bar">
          <div className="progress" style={{ width: "90%" }}></div>
        </div>
        <span>React.js</span>
      </div>
      <div className="tech-item">
        <SiNextdotjs size={40} color="#000" />
        <div className="progress-bar">
          <div className="progress" style={{ width: "80%" }}></div>
        </div>
        <span>Next.js</span>
      </div>
      <div className="tech-item">
        <FaNodeJs size={40} color="#3C873A" />
        <div className="progress-bar">
          <div className="progress" style={{ width: "75%" }}></div>
        </div>
        <span>Node.js</span>
      </div>
      <div className="tech-item">
        <FaJsSquare size={40} color="#F7DF1E" />
        <div className="progress-bar">
          <div className="progress" style={{ width: "85%" }}></div>
        </div>
        <span>JavaScript</span>
      </div>
      <div className="tech-item">
        <FaHtml5 size={40} color="#E44D26" />
        <div className="progress-bar">
          <div className="progress" style={{ width: "95%" }}></div>
        </div>
        <span>HTML5</span>
      </div>
      <div className="tech-item">
        <FaCss3Alt size={40} color="#264de4" />
        <div className="progress-bar">
          <div className="progress" style={{ width: "90%" }}></div>
        </div>
        <span>CSS3</span>
      </div>
    </div>

    </div>
  );
}

export default about;
