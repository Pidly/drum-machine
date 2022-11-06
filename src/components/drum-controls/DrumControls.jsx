import VolumeControl from "./VolumeControl";
import InfoPanel from './InfoPanel';
import './DrumControls.css';

function DrumControls() {
    return(
        <div id="drum-controls">
            <InfoPanel/>            
            <VolumeControl/>
        </div>
    );
}

export default DrumControls;