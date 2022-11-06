import { useSelector } from 'react-redux';
import './InfoPanel.css'

function InfoPanel() {
    var infoText = useSelector((state) => state.info);

    return(
        <div id="info-panel">
            <p>{infoText}</p>
        </div>
    );
}

export default InfoPanel;