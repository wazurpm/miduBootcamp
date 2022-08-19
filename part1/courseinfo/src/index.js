import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course["title"]}</h1>
}

const Content = (props) => {
  return <>
    <p>{props.course.parts[0]["title"]} {props.course.parts[0]["excercises"]}</p>
    <p>{props.course.parts[1]["title"]} {props.course.parts[1]["excercises"]}</p>
    <p>{props.course.parts[2]["title"]} {props.course.parts[2]["excercises"]}</p>
  </>
}

const Total = (props) => {
  return <>{
    props.course.parts[0]["excercises"] +
    props.course.parts[1]["excercises"] +
    props.course.parts[2]["excercises"]
    }</>
}

const App = () => {
  const course = {
    title: 'Half Stack application development',
    parts: [
    {
      title: 'Fundamentals of React',
      excercises: 10
    },
    {
      title: 'Using props to pass data',
      excercises: 7
    },
    {
      title: 'State of a component',
      excercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))