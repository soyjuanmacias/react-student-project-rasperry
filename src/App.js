import './App.css';

function App() {
  const encender = () => {
    console.log('encender');
  fetch('http://localhost:3800/encender', { mode: 'no-cors'})
}
const apagar = () => {
  console.log('apagar');
  fetch('http://localhost:3800/apagar', { mode: 'no-cors'})
  }
  return (
    <div className="App">
      <h1>React conexión raspberry</h1>
      <button onClick={() => encender()}>Encender</button>
      <button onClick={() => apagar()}>Apagar</button>
    </div>
  );
}

export default App;
