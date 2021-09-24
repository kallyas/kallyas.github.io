import logo from './logo.svg';
import './App.css';
import { Navbar, Hero, Card } from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Hero />
      <Card />
    </div>
  );
}

export default App;
