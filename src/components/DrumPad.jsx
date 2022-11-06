import './DrumPad.css';
import React, {useState} from 'react';

import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import {useEffect} from 'react';

function DrumPad(data) {
    let soundFile = data.soundFile;
    let soundName = data.soundName;
    let keyCharacter= data.keyCharacter;

    const dispatch = useDispatch();

    //Global state
    const volume = useSelector((state) => state.volume);
    const { setInfo } = bindActionCreators(actionCreators, dispatch);

    
    const grayColor = "gray";
    const aquaColor = "aqua";
    //Local state to color individual button presses
    const [color, setColor] = useState(grayColor);

    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === keyCharacter.toLowerCase()) {
            event.preventDefault();
            pressButton();      
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, [volume, color]);
    
    const pressButton = () => {
        playSound();
        setColor(aquaColor);
        setInfo(soundName);
        setTimeout(revertColor, 100);
    }

    const revertColor = () => {
        setColor(grayColor);
    }
            
    const handleEvent = () => {
        playSound();
        setInfo(soundName);
    }

    const playSound = () => {
        let audio = new Audio(soundFile);
        audio.volume = volume;
        audio.play();
    }
    
    return (
        <div>
            <button className="drum-pad" onClick={pressButton} style={{backgroundColor: color}}>{keyCharacter}</button>
        </div>
    );
}

export default DrumPad;