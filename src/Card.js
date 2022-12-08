import React from "react";
import "./Card.scss";
import DemoLogo from "./assets/demo.svg";
import CodeLogo from "./assets/code.svg";
import {motion} from "framer-motion";


class Card extends React.Component {
  render() {
    console.log(this.props.data);

    let image_path = this.props.data[4];
    return (
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{opacity: 0}} layout>
      <div className="card" key={this.props.data[0]}>
        <div className="project-photo">
          <img src={image_path} alt="pic" />
        </div>
        <div className="project-hero">
          <div className="project-title">{this.props.data[1]}</div>
          <div className="project-description">{this.props.data[2]}</div>
          <div className="project-techs">
            {this.props.data[3].map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </div>
          <div className="project-footer">
            <div className="horizontal-bar"></div>
            <div className="project-links">
              <div className="project-demo">
                <a href={this.props.data[5]} target="_blank" rel="noreferrer">
                  <img src={DemoLogo} alt="demo-logo" height="50px" />
                </a>
              </div>
              <div className="project-github">
                <a href={this.props.data[6]} target="_blank" rel="noreferrer">
                  <img src={CodeLogo} alt="code-logo" height="50px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    );
  }
}

export default Card;
