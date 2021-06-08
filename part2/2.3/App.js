import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        id:1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4,
        name: 'Redux',
        exercises: 11
      },

    ]
  }

  return (
    <div>
    < Course A1={course}/>
    </div>
  )
}
const Course = ({A1})=>
{
  return(
    <div>
    <Header B1={A1.name}/>
    <Content C1={A1.parts}/>
    <Total C1={A1.parts}/>

    </div>
  )
}

const Header=({B1})=>{
  return(
    <h2>{B1}</h2>
  )
}

const Content=({C1})=>{
  return(
    <div>
      {
        C1.map(D1=>{
          return(
            <Part key={D1.id} E1={D1.name} F1={D1.exercises}></Part>
          )
        }
        )
      }

    </div> 
  )
    }
  const Part=({E1,F1})=>{
    return(
      <p>{E1} {F1}</p>
    )
  }

  const Total=({C1})=> {
    const K1=C1.map((y)=>{return(y.exercises)})
    const sum=K1.reduce((A1,C1)=>{return A1+C1})
    return(
      <strong><p>total of {sum} exercises</p></strong>
    )
  }
export default App