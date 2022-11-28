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
        this.setState({ data: result.projects });
      })
      .catch((err) => console.log("Fetch error" + err));
  }

  render() {
    let data = [];

    if (this.state.data !== "") {
      this.state.data.map((project) => {
        data.push([project.id, project.project_name, project.project_description, project.tech_stack, project.banner]);
        return data;
      });
    }

    return (
      <div id="port">
        <button className="tags" id="tag-react">REACT</button>
        <button className="tags" id="tag-js">Javascript</button>
        <button className="tags" id="tag-python">Python</button>
        <button className="tags" id="tag-php">PHP</button>
        <button className="tags" id="tag-p1">Proof-of-concept</button>
        <button className="tags" id="tag-p2">Simple</button>
        <button className="tags" id="tag-p3">Medium or bigger</button>
        <button className="tags" id="tag-p3">Typescript</button>
        <button className="tags" id="tag-p3">REDUX</button>



        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    );
  }
}

export default Portfolio;
