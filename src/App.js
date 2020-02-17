import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";

function App() {
  window.onscroll = function() {};
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
          <nav
            style={{
              position: "sticky",
              top: "0%",
              zIndex: 100000
            }}
          >
            <div className="nav">
              <div className="line" />

              <NavLink
                to="/about"
                className="link"
                activeStyle={{ color: "blue" }}
              >
                About
              </NavLink>
              <NavLink
                activeStyle={{ color: "blue" }}
                to="/home"
                className="link"
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="link"
                activeStyle={{ color: "blue" }}
              >
                Projects
              </NavLink>

              <div className="line" />
            </div>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Users />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
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
      <div className="all">
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
          alt="shape"
        />
      </div>
      <footer id="footer1"></footer>
    </>
  );
}

function About() {
  return (
    <>
      <div className="all">
        <div className="texty">
          <h2>Experience</h2>Interned at Local Government Association of
          Queensland in their LG Sherlock department.
          <br />
          Helped create work flowsin alteryx, visualize data through tableau,
          python scripts and learnt about modern data management on a large
          scale
          <br />
          <h2>Education</h2>Bachelor of IT (Computer Science) @ QUT third year
          <br />
          <p>
            <span style={{ fontSize: "1.2em" }}>GPA:</span> 6.6/7
          </p>
          <p>
            Relevant coursework: Cloud Computing, Web Computing, Software
            Development, Databases, Statistics, Project Management
          </p>
          <br />
          <h2>Skills</h2>
        </div>
        <div className="img3">
          <div className="category">
            <h2 style={{ textAlign: "center" }}>Languages/Frameworks</h2>
            <figure>
              <img
                id="js"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/javascript.svg"
                alt="JavaScipt"
              />
              <figcaption style={{ textAlign: "center" }}>JavaScipt</figcaption>
            </figure>
            <figure>
              <img
                id="nodejs"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/node-dot-js.svg"
                alt="nodejs"
              />
              <figcaption style={{ textAlign: "center" }}>NodeJS</figcaption>
            </figure>
            <figure>
              <img
                id="java"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/java.svg"
                alt="java"
              />
              <figcaption style={{ textAlign: "center" }}>Java</figcaption>
            </figure>
            <figure>
              <img
                id="React"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/react.svg"
                alt="React"
              />
              <figcaption style={{ textAlign: "center" }}>React</figcaption>
            </figure>

            <figure>
              <img
                id="Python"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/python.svg"
                alt="Python"
              />
              <figcaption style={{ textAlign: "center" }}>Python</figcaption>
            </figure>
          </div>

          <div className="category">
            <h2 style={{ textAlign: "center" }}>Tools</h2>
            <figure>
              <img
                id="Docker"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/docker.svg"
                alt="Docker"
              />
              <figcaption style={{ textAlign: "center" }}>Docker</figcaption>
            </figure>
            <figure>
              <img
                id="aws"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/amazonaws.svg"
                alt="aws"
              />
              <figcaption style={{ textAlign: "center" }}>AmazonAWS</figcaption>
            </figure>
            <figure>
              <img
                id="git"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/git.svg"
                alt=".net"
              />
              <figcaption style={{ textAlign: "center" }}>Git</figcaption>
            </figure>
            <figure>
              <img
                id="SQL"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/mysql.svg"
                alt="sql"
              />
              <figcaption style={{ textAlign: "center" }}>MySQL</figcaption>
            </figure>

            <figure>
              <img
                id="tableau"
                style={{
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  width: "5em"
                }}
                src="https://unpkg.com/simple-icons@2.4.0/icons/tableau.svg"
                alt="tableau"
              />
              <figcaption style={{ textAlign: "center" }}>
                Tableau and Alteryx
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <footer id="footer"></footer>
    </>
  );
}

function Users() {
  return (
    <>
      <div className="all">
        <div className="main">
          <div className="gallery" id="first">
            <img
              src="https://i.imgur.com/52Z7QOx.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            />
            <div className="desc">
              <h1>Points of interest/weather API Mashup</h1>
              <div style={{ textAlign: "center" }}>
                <a href="https://github.com/Callum-Ross">
                  <img
                    alt="github"
                    id="github"
                    style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
                    src="https://unpkg.com/simple-icons@latest/icons/github.svg"
                  />
                </a>
              </div>
              Users would select a location on the map and be shown 10 POI's
              nearby.
              <br /> They could then find the weather forecast for each location
              by clicking on the pin on the map.
            </div>
          </div>
          <div class="gallery" id="second">
            <a target="_blank" href="img_forest.jpg">
              <img src="img_forest.jpg" alt="Forest" width="600" height="400" />
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
        </div>
      </div>
      <footer id="footer1"></footer>
    </>
  );
}

export default App;
