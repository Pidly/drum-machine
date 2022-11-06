import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

function VolumeControl() {
    const volume = useSelector((state) => state.volume);

    const dispatch = useDispatch();

    const {setVolume, setInfo} = bindActionCreators(actionCreators, dispatch);

    function handleChange(event) {
        setVolume(event.target.value);
        setInfo("Volume: " + Math.round(event.target.value * 100));
    }

    return(
        <div>
            <input
                type="range"
                min={0}
                max={1}
                step={0.02}
                value={volume}
                onChange={handleChange}
            />
        </div>
    );
}

export default VolumeControl;