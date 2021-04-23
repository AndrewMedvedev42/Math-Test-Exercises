import { useState } from "react"
import Data from "../ExerciseData/ExerciseData.js"

//template of the item with exercise data like for desription, problem, input and button

function Template({keyName}){
  //sets answer that was typed(for now only with numbers)
  const [typedAnswer, setTypedAnswer] = useState(0)

    return( <section>{
//maps throgh data from ExerciseData.js
      Data.map((induvidual)=>{
        const {problemDescription, mathProblem, answer, sortKey, id} = induvidual
        //consoles the mathProblem and answer to console to now the true answer(for testing only!)
        
        console.log(`${mathProblem} Answer:${answer}`);

//targets value of the induvidual item
        if(sortKey === keyName){

          const onChange = (e) =>{
            setTypedAnswer(e.target.value)
          }
//sets changes if the answer is right or not. This function disables inputfield and colors the button green 
//if the answer is right or makes button red if it is wrong
          const onCheck = (id) =>{
            console.log("Checked")
//changes the text content and color of <h1>(line 50) if the answer was right or wrong
            if(parseInt(typedAnswer) === answer){

              let node = document.getElementById(`${id}verificationMessage`)
              node.textContent = "Good job!"
              node.style.color = "limegreen"
//disables input field and button if the answer was right
              document.getElementById(`${id}input`).disabled = true
              document.getElementById(`${id}button`).disabled = true
              document.getElementById(`${id}button`).style.backgroundColor = "#cccccc"
            }else{
//changes text content and color  of <h1>(line 50) to red if the answer was wrong
              let node = document.getElementById(`${id}verificationMessage`)
              node.textContent = "Incorrect, try again!"
              node.style.color = "crimson"
            }
          }
      //the temple ot self  
          return (
           <div id={id} key={id} className="item">
             <div id={`${id}Title`} className="title">
              <h1>{problemDescription}</h1>
              <h2 id={`${id}verificationMessage`}></h2>
             </div>

                <div className="itemContent">
                    <p>{mathProblem}</p>
                    <div>
                      <input id={`${id}input`} type="text" onChange={onChange} autoComplete="off"/>
                      <button id={`${id}button`} onClick={()=>{onCheck(id)}}>Submit</button>
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

