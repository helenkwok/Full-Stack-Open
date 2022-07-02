import personService from '../services/persons'

const Persons = ({persons, setPersons, filter, setErrorMessage, setErrorStyle}) => {
  const handleDelete = (name, id) => {
    if (window.confirm(`Delete ${name}`)) {
      personService
        .remove(id)
        .then(
          setPersons(persons.filter(person => person.name !== name))
        )
        .catch(error => {
          setErrorMessage(`Information of ${name} has already been removed from server`)
          setErrorStyle(
            {
              marginBottom: 8,
              padding: 8,
              backgroundColor: 'lightgrey',
              borderStyle: 'solid',
              borderRadius: 4,
              borderColor: 'red',
              color: 'red'
            }
          )
          setTimeout(() => {
            setErrorMessage(null)
            setErrorStyle(null)
          }, 5000)
        })
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