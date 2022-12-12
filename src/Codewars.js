import React from "react";

class Codewars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "data is empty" };
  }

  componentDidMount;

  fetchCodewarsData = async () => {
    const data = await fetch("");
    const movies = await data.json();
    this.setState("data: movies");
  };

  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export default Codewars;
