import  Template  from "../ExerciseTemplate/Template.jsx";
import '../../css/App.css';
import  SectionDescription  from "./SectionDescription";

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
              <SectionDescription difficulty="Easy" />
              <Template keyName="easy"/>
            </Route>
            <Route path="/exercises/normal">
              <SectionDescription difficulty="Normal" />
              <Template keyName="norm"/>
            </Route>
            <Route path="/exercises/hard">
              <SectionDescription difficulty="Hard" />
              <Template keyName="hard"/>
            </Route>
          </Switch>
        </section>
      </Router>
    );
   
}

export default Exercises