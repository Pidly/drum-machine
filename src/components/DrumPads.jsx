import DrumPad from "./DrumPad";
import './DrumPads.css';

import heater1 from './sounds/Heater-1.mp3';
import heater2 from './sounds/Heater-2.mp3';
import heater3 from './sounds/Heater-3.mp3';
import heater4 from './sounds/Heater-4.mp3';
import clap from './sounds/Clap.mp3';
import openHH from './sounds/Open-HH.mp3';
import kicknHat from './sounds/Kick_n_Hat.mp3';
import kick from './sounds/KICK_1.mp3';
import closedHH from './sounds/Closed-HH.mp3';

function DrumPads() {
    return(
        <div id="drum-pads-container">
            <DrumPad soundName="Heater 1" keyCharacter="Q" soundFile={heater1}/>
            <DrumPad soundName="Heater 2" keyCharacter="W" soundFile={heater2}/>
            <DrumPad soundName="Heater 3" keyCharacter="E" soundFile={heater3}/>
            <DrumPad soundName="Heater 4" keyCharacter="A" soundFile={heater4}/>
            <DrumPad soundName="Clap" keyCharacter="S" soundFile={clap}/>
            <DrumPad soundName="Open HH" keyCharacter="D" soundFile={openHH}/>
            <DrumPad soundName="Kick n' Hat" keyCharacter="Z" soundFile={kicknHat}/>
            <DrumPad soundName="Kick" keyCharacter="X" soundFile={kick}/>
            <DrumPad soundName="Closed HH" keyCharacter="C" soundFile={closedHH}/>
        </div>
    );
}

export default DrumPads;
/*
<DrumPad data={{
                soundFile: heater1,
                soundName: "Heater 1",
                keyCharacter: "Q"
                }}/>
*/