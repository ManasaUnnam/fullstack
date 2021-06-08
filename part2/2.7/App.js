import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
    

  const handleNc2=(event)=>{
      setNewName(event.target.value)
  }

  const aN2=(event)=>{
    event.preventDefault()
    const v2=persons.some((variable)=>{return variable.name===newName})
    if(v2===true)
    {
      alert(`${newName} is already added to phonebook` )
    }
    else{
    const p2={
      name:newName
    }
    setPersons(persons.concat(p2))
    setNewName('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={aN2}>
        <div>
          name: <input value={newName} onChange={handleNc2}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(p4=>{return(
            <h3 key={p4.name}>{p4.name}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App