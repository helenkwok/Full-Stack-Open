import { useState, useEffect } from 'react'
import Country from './Country'

const Countries = ({countries, filter, setFilter}) => {
  const [filteredCountries, setFilteredCountries] = useState('')

  useEffect(() => {
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase(), 0)))
  }, [filter])

  return (
    <div>
      {
        filteredCountries.length > 1 && filteredCountries.length <= 10 ?
        filteredCountries.map(country =>
          <p key={country.name.common}>
            {country.name.common}
            <button onClick={() => setFilter(country.name.common)}>show</button>
          </p>
        )
        :
        filteredCountries.length === 1?
          <Country country={filteredCountries[0]} />
        :
        <div>Too many matches, specify another filter</div>
      }
    </div>
  )
}

export default Countries