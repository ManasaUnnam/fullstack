import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const D1=()=>{setGood(good+1)}
  const D2=()=>{setNeutral(neutral+1)}
  const D3=()=>{setBad(bad+1)}
  const T1= good+neutral+bad
  const A1=good-bad/T1
  const P1=good*100/T1
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={D1}>good</button><button onClick={D2}>neutral</button><button onClick={D3}>bad</button>
      </p>
      <h2>Staistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>
        
        all:{T1}<br/>
        average:{A1}<br/>
        positive:{P1}%
      
      </p>
    </div>
  )
}

export default App