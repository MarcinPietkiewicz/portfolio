import React from "react";
import "./Card.scss";

class Card extends React.Component {
  render() {
    return (
      <div className="card" key={this.props.data}>
        <div className="project-photo">photo here...</div>
        <div className="project-hero">
          <div className="project-title">{this.props.data[1]}</div>
          <div className="project-description">{this.props.data[2]}</div>
          <div className="project-techs">{this.props.data[3]}</div>
          <hr />
          <div className="project-github">link to github</div>
          <div className="project-demo">link to demo</div>
        </div>
      </div>
    );
  }
}

export default Card;
