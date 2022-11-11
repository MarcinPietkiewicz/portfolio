import React from "react";
import "./Portfolio.scss";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    fetch("http://localhost:3000/db")
      .then((response) => response.json())
      .then((result) => {
        console.log("getting result");
        console.log(result.projects);
        this.setState({ data: result.projects });
      })
      .catch((err) => console.log("Fetch error" + err));
  }

  render() {
    let z = [];

    if (this.state.data !== "") {
      this.state.data.map((project) => {
        z.push([project.project_name, project.project_description, project.tech_stack, project.banner]);
        console.log(z);
        return z;
      });
    }

    return (
      <div id="port">
        Tutaj wyniki
      <ul>
        {z.map((element) => {
          console.log('hmm'+element);
          return <li>{element[0]}</li>;
        })}
        </ul>
      </div>
    );
  }
}

export default Portfolio;
