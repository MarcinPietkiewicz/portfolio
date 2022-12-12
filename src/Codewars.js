import React from "react";

class Codewars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    this.fetchCodewarsData();
  }

  fetchCodewarsData = async () => {
    const response = await fetch("https://www.codewars.com/api/v1/users/MarcinPietkiewicz");
    const data = await response.json();
    this.setState({ data: data });
  };

  render() {
    let codewars = null;
    let loadingNote = "fetching data...";
    if (this.state.data) {
      codewars = this.state.data;
    }

    return (
      <React.Fragment>
        <div className="codewars-sign">codewars</div>
      <div className="codewars-element">
        <p>Codewars honor: <span className="bold">{codewars ? codewars.honor : loadingNote}</span></p>
        <p>Code challenges completed: <span className="bold">{codewars ? codewars.codeChallenges.totalCompleted : loadingNote}</span></p>
        <p>Codewars javascript rank: <span className="bold">{codewars ? codewars.ranks.languages.javascript.name : loadingNote}</span></p>
        <p>Codewars python rank: <span className="bold">{codewars ? codewars.ranks.languages.python.name : loadingNote}</span></p>
        <p>Overall rank: <span className="bold">{codewars ? codewars.ranks.overall.name : loadingNote}</span></p>
      </div>
      </React.Fragment>
    );
  }
}

export default Codewars;
