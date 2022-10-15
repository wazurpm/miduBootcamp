import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({courses}) => {
  return <>
  <h1>Web development curriculum</h1>
  {courses.map((course) => {
    const total = course.parts.reduce((accumulator, part) => accumulator = accumulator + part.excercises, 0)
    return <>
    <h2 key={course.id}>{course.name}</h2>
    {course.parts.map((part) => {
      return (
      <p key={part.id}>{part.name} {part.excercises}</p>
      )
    })}
    <p><strong>total of {total} excercises</strong></p>
    </>
  })}
  </>
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          excercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          excercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          excercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          excercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          excercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          excercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return <Course courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))