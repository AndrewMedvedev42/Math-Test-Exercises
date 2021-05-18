import Exercises from "./Componets/Navigation/ExerciseSection.js";
import About from "./Componets/Navigation/AboutSection.js";
//imported icons from packege.json
import { FaPenAlt } from 'react-icons/fa';
//imported a fade-in components from packege.json
import FadeIn from 'react-fade-in';
import './css/App.css';
import React from "react";
//imported react router from packege.json
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
            <li><FaPenAlt size={40} className="logoIcon"/></li>
            <li>
              <Link className="Link" to="/">About</Link>
            </li>
            <li>
              <Link className="Link" to="/exercises">Exercises</Link>
            </li>

          </ul>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/exercises">
            <Exercises />
          </Route>

          <Route path="/">
            <FadeIn>
            <About />
            </FadeIn>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App