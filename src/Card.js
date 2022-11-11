import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.data[0]}>
        {this.props.data}
      </div>
    );
  }
}

export default Card;
