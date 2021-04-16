import { useState } from "react"
import Data from "../ExerciseData/ExerciseData.js"

//template of the item with exercise data like for desription, problem, input and button

function Template({keyName}){
  //sets answer that was typed(for now only with numbers)
  const [typedAnswer, setTypedAnswer] = useState(0)

    return( <section>{
      //maps throgh data from ExerciseData.js
      Data.map((induvidual)=>{
        const {keyPass, problemDescription, mathProblem, answer, sortKey, id} = induvidual
        //consoles the mathProblem and answer to console to now the true answer(for testing only!)
        
        console.log(`${mathProblem} Answer:${answer}`);
        console.log("_");

    //targets value of the induvidual item
        if(sortKey === keyName){
          const onChange = (e) =>{
            setTypedAnswer(e.target.value)
          }
    //sets changes if the answer is right or not. This function disables inputfield and colors the button green 
    //if the answer is right or makes button red if it is wrong
          const onCheck = () =>{
            console.log("Checked")
            console.log(typeof typedAnswer)
            if(parseInt(typedAnswer) === answer){
              document.getElementById("answer").disabled = true;
              document.getElementById("button").style.backgroundColor = "lime";
            }else{
              document.getElementById("button").style.backgroundColor = "crimson";
            }
          }
      //the temple ot self  
          return (
           <div key={id} className="item">
             <h3>{problemDescription}</h3>
                <div className="itemContent">
                    <p>{mathProblem}</p>
                    <div>
                      <input id="answer" type="text" onChange={onChange}/>
                      <button id="button" onClick={onCheck}>Submit</button>
                    </div>
                </div>
           </div>
          )
        }
    })
}
</section>)
}

export default Template

