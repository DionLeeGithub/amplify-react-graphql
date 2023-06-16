import logo from './logo.svg';
import Bocchi from './Bocchi.gif';
import Test from './Test.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Test} className="App-logo" alt="logo" />
        <img src={Bocchi} className="App-logo" alt="logo" />
        <p>
          Berputar Seperti Pelek Kami
          Dari ALLYOURWHEELS
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
