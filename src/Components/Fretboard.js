import React from 'react';
import MuteBtns from './MuteBtns.js';
import FretboardBg from './FretboardBg.js';
import FretMarkers from './FretMarkers.js';

function Fretboard({ currFrets, updateCurrFrets, currFingers, updateCurrFingers }){
    
    return (
        <div className="fretboard-container">
             <MuteBtns
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
            />
            <FretboardBg 
                currFrets={currFrets}
                currFingers={currFingers}
            />
            <FretMarkers
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
                currFingers={currFingers}
                updateCurrFingers={updateCurrFingers}
            />
        </div>
    )
}

export default Fretboard;