import personService from '../services/persons'

const Persons = ({persons, setPersons, filter}) => {
  const handleDelete = (name, id) => {
    if (window.confirm(`Delete ${name}`)) {
      personService
        .remove(id)
        .then(
          setPersons(persons.filter(person => person.name !== name))
        )
    }
  }
  return (
    <>
      {
        persons.filter(person =>
          person.name.toLowerCase()
          .includes(filter.toLowerCase(), 0)
        ).map(person =>
          <p key={person.name}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.name, person.id)}>delete</button>
          </p>
        )
      }
    </>
  )
}

export default Persons