import '../../css/About.css';
import penSVG from "../../Pen.svg"

function About() {
    return (
      <section className="abouttitlesect">
        <div>
          <h1>Welcome!</h1>
          <p>Math-Test-Exersices is non commersial platform for solving easy/medium/hard algebraic problems</p>
          <p>For now, this website does not contain hard stuctured exersises, and will be added later.</p>
          <h1>How to fill answers:</h1>
          <p>1. Answers should not contain spaces (write correctly: -2).</p>
          <p>2. Ordinary fractions - through a slash (correct to write: 4/3);</p>
          <p>3. Decimal fractions - through a dot without spaces (write correctly: 4.7)</p>
          <section>
            <h1>Happy learning :)</h1>
            <img className="purplePenSVG" src={penSVG} alt="PurplePen"/>
          </section>
          
          <p className="authorMessage">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
      </section>
    )
  }

export default About