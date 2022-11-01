import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="header-name">Marcin Pietkiewicz</div>
        <div id="right-menu">
          <a href="#">about</a>
          <a href="#">portfolio</a>
          <a href="#">contect</a>
        </div>
      </header>
      <main>
        <section id="about">
          <div className="about-title">about the developer</div>
          <div className="about-pic-section">
            <div className="about-pic">pic</div>
            <div className="links-section">links logos</div>
          </div>
          <div className="about-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </section>
        <section id="portfolio">
          <div id="portfolio-title">portfolio</div>
          <div id="portfolio-tiles">portf tiles here...</div>
        </section>
        <section id="contact"></section>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
