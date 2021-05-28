import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header Course={course} />
      <Content c1={part1} c2={part2} c3={part3} f1={exercises1} f2={exercises2} f3={exercises3} />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=test=>{
  return(
    <div>
      <h1>{test.Course}</h1>
    </div>
  );
}
const Content=tests=>{
  return(
    <div>
      <Part P={tests.c1} E={tests.f1}/>
     
      
     <Part P={tests.c2} E={tests.f2}/>
   
  
     <Part P={tests.c3} E={tests.f3}/>
    </div>
  )
}

const Total=t=>{
  return(
    <div>
      <p>No:Of:Exercises:{t.total}</p>
    </div>
  )
}
const Part=test=>{
  return(
    <p>{test.P} {test.E}</p>
  )
}

export default App