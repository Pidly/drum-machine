import {combineReducers} from "redux";
import volumeReducer from './volumeReducer';
import infoReducer from './infoPanelReducer';

const reducers = combineReducers({
    volume: volumeReducer,
    info: infoReducer
});

export default reducers;