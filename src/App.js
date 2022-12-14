import React from "react";
import "./App.scss";
import Portfolio from "./Portfolio.js";
import Codewars from "./Codewars.js";
import GithubLogo from "./assets/github.svg";
import LinkedinLogo from "./assets/linkedin.svg";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <div id="header-name">Marcin Pietkiewicz</div>
          <div id="right-menu">
            <a href="#about">about</a>
            <a href="#portfolio">portfolio</a>
            <a href="#contact">codewars</a>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <div className="section-title white">about the developer</div>
          <div className="about-container">
            <div className="about-left">
              <div className="about-pic-section">
                <div className="about-pic">
                  <img id="dev-img" src={require("./assets/marcin.jpg")} alt="" />
                </div>
                <div className="about-links-section">
                  <a href="https://github.com/MarcinPietkiewicz/" target="_blank" rel="noreferrer">
                    <img id="github" src={GithubLogo} alt="" />
                  </a>
                  <a href="http://www.linkedin.com/in/marcin-pietkiewicz/" target="_blank" rel="noreferrer">
                    <img id="linkedin" src={LinkedinLogo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="about-description">
                <p>
                  As a web designer and Frontend React developer. I prioritize the use of clean code, design patterns and a commitment to
                  DRY principles. I’m also devoted to using accessibility and responsiveness in my markup and design. Other than that, I
                  spend my spare time building upon my development skills and creating my own personal projects.
                </p>

                <p>
                  I enjoy detective books, playing and designing board games and watching Scott Manley. From time to time I enjoy going
                  outdoors for a relaxing walk, jog or a bike ride.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="section-title">some of my work</div>
          <Portfolio />
        </section>
        <section id="contact">
          <Codewars />
          <div className="section-title">contact me</div>
          <div className="logos-contact">
            <a href="https://github.com/MarcinPietkiewicz/" target="_blank" rel="noreferrer">
              <img id="github" src={GithubLogo} alt="" />
            </a>
            <a href="http://www.linkedin.com/in/marcin-pietkiewicz/" target="_blank" rel="noreferrer">
              <img id="linkedin" src={LinkedinLogo} alt="" />
            </a>
          </div>
        </section>
      </main>
      <footer>
        Created by&nbsp;
        <a href="https://github.com/MarcinPietkiewicz/" target="_blank" rel="noreferrer">
          Marcin Pietkiewicz
        </a>
      </footer>
    </div>
  );
}

export default App;
