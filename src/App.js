import logo from './logo.svg';
import Bocchi from './Bocchi.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Bocchi} className="App-logo" alt="logo" />
        <p>
          ecksdee
        </p>
        <a
          className="App-link"
          href="https://gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
