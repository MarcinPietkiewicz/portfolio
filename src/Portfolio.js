import React from "react";
import "./Portfolio.scss";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", filters: [] };
    this.handleFilter = this.handleFilter.bind(this);
  }

  // multi-filter version
  // handleFilters(e) {
  //   if (e.target.dataset.tech === "RESET") {
  //     this.setState({ filters: [] });
  //     let activeTags = Array.from(document.getElementsByClassName("tag selected"));
  //     activeTags.forEach((element) => {
  //       element.classList.remove("selected");
  //     });
  //     return;
  //   }
  //   let tech = e.target.dataset.tech;
  //   let arr = this.state.filters;

  //   if (arr.some((el) => el === tech)) {
  //     this.setState({ filters: this.state.filters.filter((el) => el !== tech) });
  //     e.target.classList.remove("selected");
  //   } else {
  //     this.setState({ filters: [...this.state.filters, tech] });
  //     e.target.classList.add("selected");
  //   }
  // }

  // single filter version 
  handleFilter(e) {
    if (e.target.dataset.tech === "RESET") {
      this.setState({ filters: [] });
      let activeTags = Array.from(document.getElementsByClassName("tag selected"));
      activeTags.forEach((element) => {
        element.classList.remove("selected");
      });
      return;
    }
    let tech = e.target.dataset.tech;
    let arr = this.state.filters;

    if (arr.some((el) => el === tech)) {
      this.setState({ filters: this.state.filters.filter((el) => el !== tech) });
      e.target.classList.remove("selected");
    } else {
      this.setState({ filters: [tech] });
      let activeTags = Array.from(document.getElementsByClassName("tag selected"));
      activeTags.forEach((element) => {
        element.classList.remove("selected");});
      e.target.classList.add("selected");
    }
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    fetch('https://marcinpietkiewicz.github.io/portfolio/data/mock.json')
      .then((response) => response.json())
      .then((result) => {
        this.setState({ data: result.projects });
      })
      .catch((err) => console.log("Fetch error" + err));
  }

  filterTags(tags, data) {
    console.log('tags = '+tags)
    tags.forEach((tag) => {
      data = data.filter((element) => element.tech_stack.some((el) => el === tag));
    });
    return data;
  }

  render() {
    let data = [];

    if (this.state.data !== "") {
      this.filterTags(this.state.filters, this.state.data).map((project) => {
        data.push([
          project.id,
          project.project_name,
          project.project_description,
          project.tech_stack,
          project.banner,
          project.demo_link,
          project.git_link,
        ]);
        return data;
      });
    }

    return (
      <React.Fragment>
        <div id="port-flex">
          <div id="tags-text">Select a tag to filter projects</div>
          <div id="tags">
            <button className="tag" onClick={this.handleFilter} data-tech="React">
              React
            </button>
            <button className="tag" onClick={this.handleFilter} data-tech="Javascript">
              Javascript
            </button>
            <button className="tag" onClick={this.handleFilter} data-tech="Php">
              PHP
            </button>
            <button className="tag" onClick={this.handleFilter} data-tech="Rwd">
              RWD
            </button>
            <button className="tag" onClick={this.handleFilter} data-tech="Api">
              API
            </button>
            <button className="tag" onClick={this.handleFilter} data-tech="Typescript">
              Typescript
            </button>
            <button className="tag" onClick={this.handleFilter} data-tech="Redux">
              Redux
            </button>
            <button className="tag reset" onClick={this.handleFilter} data-tech="RESET">
              Show all projects
            </button>
          </div>
        </div>
        
        <motion.div layout id="port">
          <AnimatePresence>
          {data.map((element, index) => {
            return <Card key={index} data={element} />;
            
          })}
          </AnimatePresence>
        </motion.div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
