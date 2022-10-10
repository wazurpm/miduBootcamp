import './App.css';
import { useState } from 'react';

const App = () => {

  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const feedback = (action) => {
      if(action === 'good'){
        return () => {setStatistics((prevSatistics) => {
          const newStatistics = {
            ...prevSatistics,
            good: statistics.good + 1
          }
          return newStatistics
        })};
      } else if(action === 'neutral'){
        return () => {setStatistics((prevSatistics) => {
          const newStatistics = {
            ...prevSatistics,
            neutral: statistics.neutral + 1
          }
          return newStatistics
        })};
      } else if(action === 'bad'){
        return () => {setStatistics((prevSatistics) => {
          const newStatistics = {
            ...prevSatistics,
            bad: statistics.bad + 1
          }
          return newStatistics
        })};
      }
    }

  return (<>
    <h1>give feedback</h1>
    <div>
      <button onClick={feedback('good')}>good</button>
      <button onClick={feedback('neutral')}>neutral</button>
      <button onClick={feedback('bad')}>bad</button>
    </div>
    <h1>statistics</h1>
    <p>good {statistics.good}</p>
    <p>neutral {statistics.neutral}</p>
    <p>bad {statistics.bad}</p>
  </>);
}

export default App;