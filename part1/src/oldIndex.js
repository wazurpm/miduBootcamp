import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const Counter = ({number}) => {
    return <h1>{number}</h1>
} 

const App = (props) => {
    const [contador, setContador] = useState(0);

    const handleClick = (increase) => {
        return increase ? ()=>{setContador((prevContador) => prevContador + 1)} : ()=>{setContador((prevContador) => prevContador - 1)};
    }
    
    const handleClickReset = () => {
        setContador(0);
    }

    const isEven = contador % 2 === 0;
    const mensajePar = isEven ? 'Es par' : 'Es impar';

    return (
        <div>
            <p>El valor del contador es:</p>
            <Counter number={contador} />
            <p>{mensajePar}</p>
            <button onClick={handleClick(true)}>
                Incrementar
            </button>
            <button onClick={handleClick(false)}>
                Decrementar
            </button>
            <button onClick={handleClickReset}>
                Reset
            </button>
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
