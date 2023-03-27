import React, { useState } from 'react';
import GuitarBody from './GuitarBody.js';
import Fretboard from './Fretboard.js';
import ChordFinder from '../Utils/chordFinder.js';
import ChordMaker from './ChordMaker.js';
import FingerPositionFinder from '../Utils/fingerPositionFinder.js';

function Guitar(){

    const [currFrets, setCurrFrets] = useState([0,0,0,0,0,0]);
    const [currFingers, setCurrFingers] = useState([0,0,0,0,0,0]);

    function updateCurrFrets(string, fret){

        let newFrets = [...currFrets];

        if(document.querySelectorAll('.selected').length === 2){
            newFrets = ChordFinder();
        }
        else{
            newFrets[string] = fret !== undefined ? fret : newFrets[string] * -1;
        }

        setCurrFrets(newFrets);
    }

    function updateCurrFingers(){
        let newFing = [...currFingers];

        newFing = FingerPositionFinder();

        setCurrFingers(newFing);
    }

    return (
        <div className="guitar" id="guitar">
            <GuitarBody
                currFrets={currFrets}
            />
            <Fretboard
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
                currFingers={currFingers}
                updateCurrFingers={updateCurrFingers}

            />
            <ChordMaker 
                updateCurrFrets={updateCurrFrets}
                updateCurrFingers={updateCurrFingers} 
            />
        </div>
    )
}

export default Guitar;