import { useState, useEffect } from 'react'
import Country from './Country'

const Countries = ({countries, filter, setFilter}) => {
  const [filteredCountries, setFilteredCountries] = useState('')

  useEffect(() => {
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase(), 0)))
  }, [filter])

  switch(filteredCountries.length) {
    case 0:
      return <div>No match, specify another filter</div>
    case 1:
      return <Country country={filteredCountries[0]} />
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return filteredCountries.map(country =>
        <p key={country.name.common}>
          {country.name.common}
          <button onClick={() => setFilter(country.name.common)}>show</button>
        </p>
      )
    default:
      return <div>Too many matches, specify another filter</div>
  }
}

export default Countries