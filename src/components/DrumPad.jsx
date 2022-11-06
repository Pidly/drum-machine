import './DrumPad.css';
import coolSound from './sounds/Heater-1.mp3';
function DrumPad({key, sound}) {
    let audio = new Audio("./sounds/Heater-1.mp3");

    const playSound = () => {
        new Audio(coolSound).play();
        //audio.play();
    }

    return (
        <button className="drum-pad" onClick={playSound}>Q</button>
    );
}

export default DrumPad;