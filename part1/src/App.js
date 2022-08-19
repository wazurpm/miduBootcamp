import './App.css';
import Mensaje  from './Mensaje';

const Description = () => {
  return (
  <p>Esta es la descripción del curso fullstack bootcamp</p>
  )
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='green' message='Estamos trabajando'/>
      <Mensaje color='red' message='En un curso'/>
      <Mensaje color='yellow' message='de React'/>
      <Description />
    </div>
  );
}

export default App;