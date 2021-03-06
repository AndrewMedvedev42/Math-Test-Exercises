import { useState } from "react";
import Data from "../ExerciseData/ExerciseData.js";
// import EquationEditor from "equation-editor-react";
// import MathJax from "mathjax3-react";
import MathJax from 'react-mathjax';


//template of the item with exercise data like for desription, problem, input and button

function Template({keyName}){

    //sets answer that was typed(for now only with numbers)
    const [typedAnswer, setTypedAnswer] = useState()


    return(<section>{
//maps throgh data from ExerciseData.js

      Data.map((induvidual)=>{
        const {problemDescription, mathProblem, answer, sortKey, id} = induvidual
        //consoles the mathProblem and answer to console to now the true answer(for testing only!)
        
        console.log(`${sortKey} ${mathProblem} Answer:${answer}`);
        

        
//targets value of the induvidual item
        if(sortKey === keyName){

          const onChanges = (e) =>{
            setTypedAnswer(e.target.value)
          }
//sets changes if the answer is right or not. This function disables inputfield and colors the button green 
//if the answer is right or makes button red if it is wrong
          const onCheck = (id) =>{
            console.log("Checked")
            console.log();
//changes the text content and color of <h1>(line 50) if the answer was right or wrong
             if(typedAnswer == answer){
              let node = document.getElementById(`${id}verificationMessage`)
              node.textContent = "Good job!"
              node.style.color = "limegreen"
//disables input field and button if the answer was right
              document.getElementById(`${id}input`).disabled = true
              document.getElementById(`${id}button`).disabled = true
              document.getElementById(`${id}button`).classList.remove("submitButton")
              document.getElementById(`${id}button`).classList.add("buttonIsDisabled")
              console.log("buttonIsDisabled");
              //sets typed answer back to default to avoid "correct answer for all different exercises"
              setTypedAnswer(0)
            }else{
//changes text content and color  of <h1>(line 50) to red if the answer was wrong
              let node = document.getElementById(`${id}verificationMessage`)
              node.textContent = "Incorrect, try again!"
              node.style.color = "crimson"
              //sets typed answer back to default to avoid "correct answer for all different exercises"
              setTypedAnswer(0)
            }
          }
      //the temple ot self  
      //so here if can see, I made uniqe ids for each element in "item" slot depending by id of the "item" 
      //so each element can have independed but same checking procedure 

          return (
           <div id={id} key={id} className="item">
             <div id={`${id}Title`} className="title">
              <h1>{problemDescription}</h1>
              <h2 id={`${id}verificationMessage`}></h2>
             </div>
                <div className="itemContent">
                    <div className="mathProblemDesc">
                      {/* Here is the compiler of algebra formulas */}
                      <MathJax.Provider>
                        <MathJax.Node inline formula={mathProblem}/>
                      </MathJax.Provider>
                    </div>
                    <div>
                      <input id={`${id}input`} type="text" onChange={onChanges} autoComplete="off"/>
                      <button id={`${id}button`} className="submitButton" onClick={()=>{onCheck(id)}}>Submit</button>
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

