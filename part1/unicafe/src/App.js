import './App.css';
import { useState } from 'react';

const NoFeedback = () => {
  return <h3>No feedback given</h3>
}

const Statistics = ({data}) => {
  const all = data.good + data.neutral + data.bad;
  const average =  all / 3;
  const positive = data.good * 100 / all;

  return (<table>
    <tr>
      <td>all</td>
      <td>{all}</td>
    </tr>
    <tr>
      <td>average</td>
      <td>{average}</td>
    </tr>
    <tr>
      <td>positive</td>
      <td>{positive}%</td>
    </tr>
  </table>);
}

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
  return (<div>
    <h1>give feedback</h1>
    <div>
      <button onClick={feedback('good')}>good</button>
      <button onClick={feedback('neutral')}>neutral</button>
      <button onClick={feedback('bad')}>bad</button>
    </div>
    <h1>statistics</h1>
    <table>
      <tr>
        <td>good</td>
        <td>{statistics.good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{statistics.neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{statistics.bad}</td>
      </tr>
    </table>
    {statistics.good===0&&statistics.neutral===0&&statistics.bad===0
    ? <NoFeedback />
    : <Statistics data={statistics}/>}
  </div>);
}

export default App;