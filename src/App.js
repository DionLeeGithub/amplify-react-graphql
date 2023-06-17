import Bocchi from './Bocchi.gif';
import Test from './Test.png';
import './App.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      
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
        <Button onClick={signOut}>Sign Out</Button>
      </header>
    </View>
  );
}

export default withAuthenticator(App);
