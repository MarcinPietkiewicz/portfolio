import React from "react";
import "./Portfolio.scss";
import Card from "./Card";

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
    let data = [];

    if (this.state.data !== "") {
      this.state.data.map((project) => {
        data.push([project.project_name, project.project_description, project.tech_stack, project.banner]);
        console.log(data);
        return data;
      });
    }

    return (
      <div id="port">
        {data.map((element, index) => {
          return (
            <div>
              <Card id={index} data={element}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Portfolio;
