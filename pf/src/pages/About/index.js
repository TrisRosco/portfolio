import React, { useEffect } from "react";
import NavBar from "../../components/navBar";
import "./styles.css";

function About() {
  useEffect(() => {
    console.log("About loaded");
  }, []);

  return (
    <div className="about">
      <header className="about-header">
        <NavBar />
      </header>
      <div className="about-container">
        <div className="about-content">
          <div className="about-content-text">
            <h1 id="hey">
              Hey!
              <br /> I'm <span className="my-name">Tristan!</span>
            </h1>
            <p>
              A <span className="highlight">Junior Full-Stack Developer</span> based in the UK. 
              <br/>
              I've got a broad selection of tech skills and experience, and I'm constantly looking to broaden that range even further.
            </p>
            <p>
              With a background in <span className="highlight">Video Editing</span>, I have a keen eye for detail and a passion for creating things that appeal to a wide range of audiences.
            </p>
            <p>
              I'm a big fan of all things tech, and I'm always looking for new
              things to learn. I'm currently working on a few projects, which
              you can check out on my 
              <a 
                href="https://www.github.com/trisrosco"
                target="_blank"
                rel="noopener noreferrer"
                id="github-inline"
                >
                &nbsp;GitHub
              </a>!
            </p>
            <p>
             If you'd like to get in touch, feel free to reach out!
            </p>
            <div id="link-container">
              <p>
                <a
                  href="https://www.linkedin.com/in/tristan-roscorla"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="linkedin-github"
                >
                  {/* The noopner noreferrer thingy is to prevent a security vulnerability */}
                  LinkedIn &nbsp;
                </a>
              </p>
              <p>|</p>
              <p>
                <a
                  href="https://www.github.com/trisrosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="linkedin-github"
                >
                  &nbsp; GitHub
                </a>
              </p>
            </div>
            <div className="tech-container">
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                  alt="html5"
                />
                <p>HTML5</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/color/48/000000/css3.png"
                  alt="css3"
                />
                <p>CSS3</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                  alt="javascript"
                />
                <p>JavaScript</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/color/48/000000/react-native.png"
                  alt="react"
                />
                <p>React</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/?size=512&id=bp24DwGXJDyT&format=png"
                  alt="jest"
                />
                <p>Jest</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png"
                  alt="node"
                />
                <p>Node</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png"
                  alt="express"
                />
                <p>Express</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/?size=512&id=12599&format=png"
                  alt="github"
                />
                <p>GitHub</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://img.icons8.com/?size=512&id=38561&format=png"
                  alt="PostgresSQL"
                />
                <p>PostgresSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
