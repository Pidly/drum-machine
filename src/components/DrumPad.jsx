import './DrumPad.css';
import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import {useEffect} from 'react';

function DrumPad(data) {
    const volume = useSelector((state) => state.volume);

    const dispatch = useDispatch();
    const { setInfo } = bindActionCreators(actionCreators, dispatch);

    let ref = React.createRef();
    let soundFile = data.soundFile;
    let soundName = data.soundName;
    let keyCharacter= data.keyCharacter;
    
    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === keyCharacter.toLowerCase()) {
            event.preventDefault();
            // 👇️ your logic here
            //playSound();
            handleClick();
            //setInfo(soundName);
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, [volume]);
    /*
        need:
        {
            soundFile: file(Heater-1.mp3),
            soundName: "Heater 1",
            keyCharacter: "Q" (Q,W,E,A,S,D,Z,X,C)
        }

        state for:
            volume,
            last sound played (Or volume adjusted),
            Power button?
    */
            
    const handleEvent = () => {
        playSound();
        setInfo(soundName);
    }

    const playSound = () => {
        console.log(volume);
        let audio = new Audio(soundFile);
        audio.volume = volume;
        audio.play();
    }
    const handleClick = () => {
        ref.current.click();
    }

    return (
        <div>
            <button className="drum-pad" onClick={handleEvent} ref={ref}>{keyCharacter}</button>
        </div>
    );

    
}

export default DrumPad;