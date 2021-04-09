import EasyData from "../ExerciseData/ExerciseData"

function EasyExercise(){

    return( <section>{
      EasyData.map((induvidual)=>{
           const {key, problemDescription, mathProblem} = induvidual
         
          const onChange = (e) =>{
            console.log(e.target.value)
          }

         return (
           <div key={key} className="item">
             <p>{problemDescription}</p>
                <div className="itemContent">
                    <h3>{mathProblem}</h3>
                    <input type="text" onChange={onChange}/>
                    <button>Submit</button>
                </div>
           </div>
         )
    })
}
</section>)
}

export default EasyExercise

