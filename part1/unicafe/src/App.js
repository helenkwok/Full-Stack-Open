import { useState } from 'react'

const Display = ({text, value}) => <div>{text} {value}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  const good = props.statistics[0]
  const neutral = props.statistics[1]
  const bad = props.statistics[2]
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={all} />
      <Display text="average" value={average} />
      <Display text="positive" value={`${positive} %`} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistics = [good, neutral, bad]

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(prev => prev + 1)} text="good" />
      <Button handleClick={() => setNeutral(prev => prev + 1)} text="neutral" />
      <Button handleClick={() => setBad(prev => prev + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App