import {combineReducers} from "redux";
import volumeReducer from './volumeReducer';
import infoReducer from './infoPanelReducer';
import colorReducer from './colorReducer';

const reducers = combineReducers({
    volume: volumeReducer,
    info: infoReducer,
    color: colorReducer
});

export default reducers;