import React from "react";
import "./Portfolio.scss";
import Card from "./Card";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", filters: [] };
    this.handleFilter = this.handleFilter.bind(this);
    this.filterTags = this.filterTags.bind(this);
  }

  handleFilter(e) {
    if (e.target.dataset.tech === "RESET") {
      this.setState({filters: []});
      return;
    }
    console.log(this.state.filters);
    let tech = e.target.dataset.tech;
    let arr = this.state.filters;
    console.log("tech = " + tech + ", this.state.filters = " + this.state.filters + ", arr.length = " + arr.length);

    if (arr.some((el) => el === tech)) {
      console.log('removing '+tech);
      this.setState({filters: this.state.filters.filter(el => el !== tech)})
    } else {
      console.log('adding '+tech);
      this.setState({ filters: [...this.state.filters, tech] });
    }
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


  filterTags(tags, data) {
    console.log(tags, data);
      tags.forEach(tag => {
        data = data.filter(element => element.tech_stack.some(el => el === tag))
      }
      )
      return data;
    }

  

  render() {
    let data = [];

    if (this.state.data !== "") {
      console.log(this.state.filters, this.state.data);
      this.filterTags(this.state.filters, this.state.data).map((project) => {
        data.push([project.id, project.project_name, project.project_description, project.tech_stack, project.banner]);
        return data;
      });
    }

    return (
      <div id="port">
        <button className="tags" onClick={this.handleFilter} data-tech="React">
          REACT
        </button>
        <button className="tags" onClick={this.handleFilter} data-tech="Javascript" >
          Javascript
        </button>
        <button className="tags" onClick={this.handleFilter} data-tech="Python" >
          Python
        </button>
        <button className="tags" onClick={this.handleFilter} data-tech="Php" >
          PHP
        </button>
        <button className="tags" onClick={this.handleFilter} data-tech="Typescript">
          Typescript
        </button>
        <button className="tags" onClick={this.handleFilter} data-tech="Redux">
          REDUX
        </button>
        <button className='reset' onClick={this.handleFilter} data-tech="RESET">
          RESET TAGS
        </button>


        {data.map((element, index) => {
          return <Card key={index} data={element}/>;
        })}
      </div>
    );
  }
}

export default Portfolio;
