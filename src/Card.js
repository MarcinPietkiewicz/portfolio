import React from "react";
import "./Card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" key={this.props.data[0]}>
        {this.props.data}
      </div>
    );
  }
}

export default Card;
