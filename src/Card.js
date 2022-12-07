import React from "react";
import "./Card.scss";

class Card extends React.Component {
  render() {
    console.log(this.props.data);
    let image_path = this.props.data[4];
    return (
      <div className="card" key={this.props.data[0]}>
        <div className="project-photo">
          <img src={image_path} alt="pic" />
        </div>
        <div className="project-hero">
          <div className="project-title">{this.props.data[1]}</div>
          <div className="project-description">{this.props.data[2]}</div>
          <div className="project-techs">{this.props.data[3]}</div>
          <hr />
          <div className="project-links">
            <div className="project-demo">
              <a href={this.props.data[5]}>Demo</a>
            </div>
            <div className="project-github">
              <a href={this.props.data[4]}>Code</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
