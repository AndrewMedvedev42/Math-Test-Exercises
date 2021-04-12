import { useState } from "react"
import Data from "../ExerciseData/ExerciseData.js"

function Template({keyName}){

  const [typedAnswer, setTypedAnswer] = useState(0)

  console.log(keyName);

    return( <section>{
      Data.map((induvidual)=>{
        const {keyPass, problemDescription, mathProblem, answer, sortKey, id} = induvidual

        if(sortKey === keyName){
          const onChange = (e) =>{
            setTypedAnswer(e.target.value)
            console.log(`${problemDescription}: ${e.target.value}`)
          }
          
          const onCheck = () =>{
            console.log("Checked")
            console.log(typeof typedAnswer)
            if(parseInt(typedAnswer) === answer){
              alert("You get it right! Good Job!")
            }else{
              alert("Answer is incorrect");
            }
          }
          
          return (
           <div key={id} className="item">
             <p>{problemDescription}</p>
                <div className="itemContent">
                    <h3>{mathProblem}</h3>
                    <div>
                      <input type="text" onChange={onChange}/>
                      <button onClick={onCheck}>Submit</button>
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

