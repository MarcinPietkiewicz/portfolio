import React from "react";
import "./Portfolio.scss";
import Card from "./Card";
import { ThemeProvider } from "react-bootstrap";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", filters: ['react', 'python'] };
    this.handleFilter = this.handleFilter.bind(this);
  }

handleFilter(e) {
  let tech = e.target.dataset.tech;
  let arr = this.state.filters;
  console.log('button clicked...'+tech);
  // console.log(arr.length == 0);
  console.log(arr.some(el => el !== tech));
  if (arr.some(el => el !== tech)){
    this.setState({filters: this.state.filters.push(tech)})
  }
  // this.state.filters.some(tech) ? this.setState({filters: this.state.filters.filter(e => e !== tech)}) : this.setState({filters: [...this.state.filters, tech]});
  console.log(this.state.filters);
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
        <button className="tags" onClick={this.handleFilter} data-tech="react" id="tag-react">REACT</button>
        <button className="tags" onClick={this.handleFilter} data-tech="javascript" id="tag-js">Javascript</button>
        <button className="tags" onClick={this.handleFilter} data-tech="python" id="tag-python">Python</button>
        <button className="tags" onClick={this.handleFilter} data-tech="PHP" id="tag-php">PHP</button>
        <button className="tags" onClick={this.handleFilter} data-tech="poc" id="tag-p1">Proof-of-concept</button>
        <button className="tags" onClick={this.handleFilter} data-tech="simple" id="tag-p2">Simple</button>
        <button className="tags" onClick={this.handleFilter} data-tech="medium" id="tag-p3">Medium or bigger</button>
        <button className="tags" onClick={this.handleFilter} data-tech="typescript" id="tag-p3">Typescript</button>
        <button className="tags" onClick={this.handleFilter} data-tech="redux" id="tag-p3">REDUX</button>
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    );
  }
}

export default Portfolio;
