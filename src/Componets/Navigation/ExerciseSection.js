import  Template  from "../ExerciseTemplate/Template.jsx";
import '../../css/App.css';
import  SectionDescription  from "./SectionDescription";
//imported a fade-in components from packege.json
import FadeIn from 'react-fade-in';
//imported react router from packege.json
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
          <article>
            <p className="opac">Select an appropriate for you level in algebra</p>
          </article>
          <nav className="difficultySection">
                <Link className="Link linkHover" to="/exercises/easy">Easy</Link>
                <Link className="Link linkHover" to="/exercises/medium">Medium</Link>
                <Link className="Link linkHover" to="/exercises/hard">Hard</Link>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/exercises/easy">
              <Easy/>
            </Route>
            <Route path="/exercises/medium">
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
          <FadeIn delay={200}>
            <SectionDescription difficulty="Easy" />
            <Template keyName="easy"/>
          </FadeIn>
      )
    }
    function Medium() {
      return(
          <FadeIn delay={200}>
            <SectionDescription difficulty="Medium" />
            <Template keyName="medium"/>
          </FadeIn>
      )
    }
    function Hard() {
      return(
          <FadeIn delay={200}>
            <SectionDescription difficulty="Hard" />
            <Template keyName="hard"/>
          </FadeIn>
      )
    }
}

export default Exercises