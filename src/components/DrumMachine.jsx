import DrumPads from './DrumPads';
import DrumControls from './drum-controls/DrumControls';
import './DrumMachine.css';

function DrumMachine() {
    return (
        <div id="drum-machine">
            <DrumPads/>
            <DrumControls/>
        </div>
    );
}

export default DrumMachine;