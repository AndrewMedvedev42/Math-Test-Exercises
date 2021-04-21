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
            console.log(typeof typedAnswer)
            if(parseInt(typedAnswer) === answer){

              let node = document.getElementById(`${id}verificationMessage`)
              node.textContent = "Good job!"
              node.style.color = "limegreen"

              document.getElementById(`${id}input`).disabled = true
              document.getElementById(`${id}button`).disabled = true
            }else{

              let node = document.getElementById(`${id}verificationMessage`)
              node.textContent = "Incorrect, try again!"
              node.style.color = "crimson"
            }
          }
      //the temple ot self  
          return (
           <div id={id} key={id} className="item">
             <div id={`${id}Title`} className="title">
              <h3>{problemDescription}</h3>
              <h1 id={`${id}verificationMessage`}></h1>
             </div>
                <div className="itemContent">
                    <p>{mathProblem}</p>
                    <div>
                      <input id={`${id}input`} type="text" onChange={onChange}/>
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

