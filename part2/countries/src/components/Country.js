const Country = ({country}) => {
  return (
    <div>
          <h1>{country.name.common}</h1>
          <p>{`capital ${country.capital}`}</p>
          <p>{`area ${country.area}`}</p>
          <h3>languages:</h3>
          <ul>
            {Object.keys(country.languages).map(key =>
              <li key={key}>{country.languages[key]}</li>
            )}
          </ul>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
  )
}

export default Country