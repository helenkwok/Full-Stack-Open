import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
  const [temp, setTemp] = useState(0)
  const [weatherIcon, setWeatherIcon] = useState(``)
  const [weatherDescription, setWeatherDescription] = useState(``)
  const [wind, setWind] = useState(0)

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setTemp(Number(response.data.main.temp-273.15).toFixed(2))
        setWeatherIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`)
        setWeatherDescription(response.data.weather[0].description)
        setWind(response.data.wind.speed)
      })
  }, [country])

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
      <h2>Weather in {country.capital}</h2>
      <p>{`temperature ${temp} Celsius`}</p>
      <img src={weatherIcon} alt={weatherDescription} />
      <p>{`wind ${wind} m/s`}</p>
    </div>
  )
}

export default Country