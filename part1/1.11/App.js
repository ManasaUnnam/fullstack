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
        <Button F2={D1} M2='good'/>
        <Button F2={D2} M2='neutral'/>
        <Button F2={D3} M2='bad'/>
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
  <table>
    <tbody>
    <Statistic C2={props.G1} text='good'/> 
    <Statistic C2={props.N1} text='neutral'/>
    <Statistic C2={props.B1} text='bad'/>
    <Statistic C2={T1} text='all'/>
    <Statistic C2={A1} text='average'/>
    <Statistic C2={P1} text='positive'/>
    </tbody>
  </table>
  )
}
     const Button=(props)=>{
       return(
         <button onClick={props.F2}>{props.M2}</button>
       )
     }
const Statistic=(props)=>{
  return(
    <tr>
      <td>{props.text} </td>
      <td>{props.C2} </td>
    </tr>
  )
}     
export default  App