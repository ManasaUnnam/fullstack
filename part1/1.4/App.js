import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  

  return (
    <div>
     <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
const Header=c=>{
  return(
    <h1>{c.course}</h1>
  )
}
const Content=(props)=>{
  const l3=props.parts
  const L3=l3.map((part)=>{
    return(<p>{part.name} {part.exercises}</p>)
      }
    )
    return(<div>{L3}</div>)
}
const Total=(props)=>{
  const l3=props.parts
  let c2=0
  for(const m of l3){
    c2+=m.exercises
  }
  return(
    <p>No:Of:Exercises:{c2}</p>
  )
}

export default App