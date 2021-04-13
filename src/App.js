import Exercises from "./Componets/Navigation/ExerciseSection.js";
import About from "./Componets/Navigation/AboutSection.js";

import './css/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <section className="router">
        <nav className="navSection">

          <ul>
            <li>
              <Link className="Link" to="/">Exercises</Link>
            </li>

            <li>
              <Link className="Link" to="/about">About</Link>
            </li>
          </ul>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Exercises />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App