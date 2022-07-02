import { useState } from 'react'

const PersonForm = (
  {persons, setPersons}
  ) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const addName = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length === 0) {
      setPersons(prevPersons => [...prevPersons, { name: newName, number: newNumber }])
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  return (
    <form onSubmit={addName}>
        <div>
          {`name: `}
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          {`number: `}
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm