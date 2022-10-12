import './App.css';
import { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const initialPoints = anecdotes.map((value) => {return value = 0});

const Anecdote = (props) => {
  return (<div>
  <h2>{anecdotes[props.selection]}</h2>
  <p>has {props.votes} votes</p>
  </div>);
}

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([...initialPoints]);

  const nextAnecdote = () => {
    const num = Math.floor(Math.random() * (anecdotes.length));
    return setSelected(num);
  }

  const vote = () => {
    return setPoints((prevPoints) => {
      const newPoints = [...prevPoints];
      newPoints[selected]++;
      return newPoints;
    });
  }

  const best = points.indexOf(Math.max(...points))

  return (
    <div>
      <Anecdote selection={selected} votes={points[selected]}/>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote selection={best} votes={points[best]} />
    </div>
  );
}

export default App;
