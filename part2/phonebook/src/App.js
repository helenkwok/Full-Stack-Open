import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      <h2>add a new</h2>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        setPersons={setPersons}
        filter={filter}
      />
    </div>
  )
}

export default App