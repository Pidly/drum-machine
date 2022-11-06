import './App.css';
import DrumPads from './components/DrumPads';
import DrumMachine from './components/DrumMachine';

function App() {
  return (
    <div className="App">
      <div id='drum-machine-container'>
        <DrumMachine/>
      </div>
    </div>
  );
}

export default App;
