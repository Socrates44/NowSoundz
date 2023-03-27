import React from 'react';
import { fbSize, stringPositions, fretPositions } from '../Utils/fretboardValues.js';

function Barre({currFrets, currFingers}){
    
    for (let i = 0; i < currFingers.length; i++) {
        
        for (let j = currFingers.length - 1; j >= 0  ; j--) {
            
            if(i !== j){
                
                if((currFingers[i] === currFingers[j]) && (currFingers[i] !== 0 && currFingers[i] !== -0)){
                    let barreHeight = ((fbSize.height/6) * Math.abs(j - i));

                    return(
                        <rect 
                        x={fretPositions[currFrets[i]] - 36}
                        y={stringPositions[j]}
                        width="30"
                        height={barreHeight}
                        fill="rgba(6, 97, 15, 1)"
                        rx="10"
                        
                        />
                    )
                }
                
            }
        }
    }



}

export default Barre;