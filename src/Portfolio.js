import React from "react";
import "./Portfolio.scss";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: "loading..." };
  }

  async loadData() {
    fetch("http://localhost:3000/db")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.projects);
        let z = data;
        this.setState({projects: z})
      });
  }

  render() {
    this.loadData();
    return <div id="port">{this.state.projects}</div>;
  }
}

export default Portfolio;
