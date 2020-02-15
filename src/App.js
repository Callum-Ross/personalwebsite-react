import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="title">Callum Ross</div>
          <div className="img2">
            <a href="https://www.linkedin.com/in/callum-ross-b66996165/">
              <img
                id="linkedin"
                style={{ paddingLeft: "1em", paddingRight: "1em" }}
                src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/Callum-Ross">
              <img
                alt="github"
                id="github"
                style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
                src="https://unpkg.com/simple-icons@latest/icons/github.svg"
              />
            </a>
            <a href=" mailto:callumross275@gmail.com?Subject=Hello">
              <img
                alt="mail"
                id="gmail"
                style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
                src="https://unpkg.com/simple-icons@latest/icons/gmail.svg"
              />
            </a>
          </div>
          <nav>
            <div className="nav">
              <div class="line" />
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/about" className="link">
                About
              </Link>
              <Link to="/projects" className="link">
                Projects
              </Link>
              <Link to="/resume" className="link">
                Resume
              </Link>
              <div class="line" />
            </div>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
function Home() {
  return (
    <>
      <div className="texty">
        <h2>Hi there...</h2>
        <p>
          I am a Computer Science Student at QUT. <br /> I am currently in my
          final year and enjoy web development, cloud computing and data
          science.
        </p>
      </div>
      <img
        className="img1"
        src="https://www.pngkey.com/png/detail/432-4323109_sri-yantra-gold-geometric-shapes-png.png"
        alt="code"
      />
    </>
  );
}

function About() {
  return (
    <div className="texty">
      <p>
        <h3>Studying:</h3>Bachelor of IT (Computer Science)
        <br />
        GPA: 6.6
        <br />
        Notable units Cloud Computing, Web Development, Software Development,
        Databases, Statistics, Project Management
      </p>
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}
function Resume() {
  return <h2>Resume</h2>;
}
export default App;
