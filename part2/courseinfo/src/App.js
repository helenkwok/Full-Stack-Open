const Header = ({ course }) => <h3>{course}</h3>

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <h4>total of {total} exercises</h4>
}

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map((part,key) =>
      <Part
        key={key}
        part={part}
      />
    )}
  </>

const Course = ({course}) =>
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h2>Web development curriculum</h2>
      {courses.map((course, key) =>
        <Course key={key} course={course} />
      )}
    </>
  )
}

export default App