import  Template  from "../ExerciseTemplate/Template.jsx";

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
            <h1>Choose difficulty</h1>
            <ul>
              <li>
                <Link to="/exercises/easy">Easy</Link>
              </li>
              <li>
                <Link to="/exercises/normal">Normal</Link>
              </li>
              <li>
                <Link to="/exercises/hard">Hard</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/exercises/easy">
              <Template keyName="easy"/>
            </Route>
            <Route path="/exercises/normal">
              <Template keyName="norm"/>
            </Route>
            <Route path="/exercises/hard">
              <Template keyName="hard"/>
            </Route>
          </Switch>
        </section>
      </Router>
    );
   
}

export default Exercises