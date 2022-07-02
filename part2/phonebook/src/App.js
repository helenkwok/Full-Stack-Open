import { useState, useEffect } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorStyle, setErrorStyle] = useState(null)

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

      <Notification
        message={errorMessage}
        style={errorStyle}
      />

      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      <h2>add a new</h2>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
        setErrorStyle={setErrorStyle}
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