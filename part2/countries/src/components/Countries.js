import { useState, useEffect } from 'react'

const Countries = ({countries, filter}) => {
  const [filteredCountries, setFilteredCountries] = useState('')

  useEffect(() => {
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase(), 0)))
  }, [filter])

  return (
    <div>
      {
        filteredCountries.length > 1 && filteredCountries.length <= 10 ?
        filteredCountries.map(country =>
          <p key={country.name.common}>{country.name.common}</p>
        )
        :
        filteredCountries.length === 1?
        <div>
          <h1>{filteredCountries[0].name.common}</h1>
          <p>{`capital ${filteredCountries[0].capital}`}</p>
          <p>{`area ${filteredCountries[0].area}`}</p>
          <h3>languages:</h3>
          <ul>
            {Object.keys(filteredCountries[0].languages).map(key =>
              <li key={key}>{filteredCountries[0].languages[key]}</li>
            )}
          </ul>
          <img src={filteredCountries[0].flags.png} alt={filteredCountries[0].name.common} />
        </div>
        :
        <div>Too many matches, specify another filter</div>
      }
    </div>
  )
}

export default Countries