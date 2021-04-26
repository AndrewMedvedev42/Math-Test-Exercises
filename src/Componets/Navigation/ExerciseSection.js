import  Template  from "../ExerciseTemplate/Template.jsx";
import '../../css/App.css';
import  SectionDescription  from "./SectionDescription";
import FadeIn from 'react-fade-in';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Exercises() {
    return(
        <Router>
        <section className="difficultyRouter">
          <nav className="difficultySection">
            <ul>
              <li>
                <Link className="Link linkHover" to="/exercises/easy">Easy</Link>
              </li>
              <li>
                <Link className="Link linkHover" to="/exercises/normal">Normal</Link>
              </li>
              <li>
                <Link className="Link linkHover" to="/exercises/hard">Hard</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/exercises/easy">
              <Easy/>
            </Route>
            <Route path="/exercises/normal">
              <Medium/>
            </Route>
            <Route path="/exercises/hard">
              <Hard/>
            </Route>
          </Switch>
        </section>
      </Router>
    );
  
    function Easy() {
      return(
        <section>
          <FadeIn>
            <SectionDescription difficulty="Easy" />
            <Template keyName="easy"/>
          </FadeIn>
        </section>
      )
    }
    function Medium() {
      return(
        <section>
          <FadeIn>
            <SectionDescription difficulty="Medium" />
            <Template keyName="medium"/>
          </FadeIn>
        </section>
      )
    }
    function Hard() {
      return(
        <section>
          <FadeIn>
            <SectionDescription difficulty="Hard" />
            <Template keyName="hard"/>
          </FadeIn>
        </section>
      )
    }
}

export default Exercises