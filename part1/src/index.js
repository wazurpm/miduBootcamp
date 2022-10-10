import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const WarningNotUsed = () => {
  return <p>Todavía no se ha usado el contador</p>
}

const ListOfClicks = ({clicks}) => {
  return <p>{clicks.join(", ")}</p>;
}

const App = () => {
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = (isLeft) => {
    if(isLeft){
      return () => {setClicks((prevClicks) => [...prevClicks, "L"])}
    }else{
      return () => {setClicks((prevClicks) => [...prevClicks, "R"])}
      }
    }

  const clicksCount = clicks.length;
  const left = clicks.filter(click => click === "L").length;
  const right = clicks.filter(click => click === "R").length;

  return (
    <div>
      {left}
      <button onClick={handleClickLeft(true)}>
        left
      </button>
      <button onClick={handleClickLeft(false)}>
        right
      </button>
      {right}
      <p>Clicks totales: {clicksCount}</p>
      {clicksCount === 0
      ? <WarningNotUsed />
      : <ListOfClicks clicks={clicks} />
    }
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
