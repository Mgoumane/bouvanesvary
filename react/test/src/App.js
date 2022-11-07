import logo from './logo.svg';
import './App.css';
import { formatName, random } from './utils';
import Welcome from './Welcome';
import RequireAuth from './RequireAuth';
import Clock from './Clock';
import Toggle from './Toggle';

const user1 = {
  firstName : 'Cristiano',
  lastName : 'Le GOAT'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Bonjour, {formatName(user1)} </h1>
        <RequireAuth isAuthenticated={false}>
          <Welcome name="Idris" age='25'/>
          <Welcome name="Akram" age='30'/>
          <Welcome name="Wahib" age='30'/>
        </RequireAuth>
        <Clock message="horloge"></Clock>
        <Toggle></Toggle>
      </header>
    </div>
  );
}

export default App;
