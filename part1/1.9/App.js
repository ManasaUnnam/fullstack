import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const D1=()=>{setGood(good+1)}
  const D2=()=>{setNeutral(neutral+1)}
  const D3=()=>{setBad(bad+1)}
  
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={D1}>good</button><button onClick={D2}>neutral</button><button onClick={D3}>bad</button>
        </p>
      <h2>Statistics</h2>
       <Statistics G1={good} N1={neutral} B1={bad}/>
    </div>
  )
}
const Statistics=(props)=>{
  if (props.G1===0 && props.N1===0 && props.B1===0)
  return (
    <h2> No FeedBack Given</h2>
  )
  const T1=props.G1+props.N1+props.B1
  const A1=props.G1-props.B1/T1
  const P1=props.G1*100/T1
  return(
    <p>
      good {props.G1}<br></br>
      neutral {props.N1}<br></br>
      bad {props.B1}<br></br>
      all {T1}<br></br>
      average {A1}<br></br>
      positive {P1}<br></br>
    </p>
  )
}
export default App