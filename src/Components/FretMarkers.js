import React, { useState } from 'react';
import { fbSize, fretPositions, stringPositions } from '../Utils/fretboardValues.js';
import { playNote, isMuted } from '../Utils/sounds.js';


function FretMarkers({ currFrets, updateCurrFrets, currFingers, updateCurrFingers }){
    const [string, setString] = useState(-1);
    const [fret, setFret] = useState(0);

    const fretMarker = <circle
    cx={`${fretPositions[fret] - 6}`}
    cy={`${stringPositions[string]}`}
    r="10"
    fill="rgba(255,255,255,0.7)"
    stroke="#fff"
    />

    const fretMarkers = currFrets.map((f, i) => {
        if (!isMuted(f) && currFingers[i] >= 0){
            return (
                <circle
                    key={i}
                    cx={`${fretPositions[f] - 6}`}
                    cy={`${stringPositions[i]}`}
                    r="15"
                    fill="rgba(6, 97, 15, 1)"
                    stroke="#fff"
                />
            )
        };
        return true;
    });

    const fingPosition = currFingers.map((f,i) =>  { 

        const fretOut = [...currFrets];

        if(document.querySelectorAll('.selected').length === 2){ 
            if(f < 0 || Object.is(-0, f)){
                return (
                    <text
                        key={i}
                        x={`${fretPositions[fretOut[i]] - 6}`}
                        y={`${stringPositions[i] + 6}`}
                        textAnchor="middle"
                        stroke="white"
                    >
                        
                    </text>
                )
            }
            else{
                return (
                    <text
                    key={i}
                    x={`${fretPositions[fretOut[i]] - 6}`}
                    y={`${stringPositions[i] + 6}`}
                    textAnchor="middle"
                    stroke="white"
                >
                    {f}
                </text>
                )
            }
        }
        else{
            return (
                <text
                key={i}
                x={`${fretPositions[fretOut[i]] - 6}`}
                y={`${stringPositions[i] + 6}`}
                textAnchor="middle"
                stroke="white"
            >
                
            </text>
            )
        }
    }); 

    function showMarker(e){
        let s = Math.floor(6/fbSize.height * (fbSize.height - 1 - e.nativeEvent.offsetY));
        let f = fretPositions.findIndex(pos => e.nativeEvent.offsetX < pos);
        f = f === -1 ? 0 : f;
        setString(s);
        setFret(f);
    }
    
    function hideMarker(){
        setString(-1);
    }

    return (
        <div className="fret-markers">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${fbSize.width} ${fbSize.height}`}
                width={`${fbSize.width}`}
                height={`${fbSize.height}`}

                onMouseMove={showMarker}
                onMouseLeave={hideMarker}

                onClick={()=>{
                    playNote(string, fret);
                    updateCurrFrets(string, fret);
                }}
            >
            {string > -1 && fretMarker}
            {fretMarkers}
            {fingPosition}
            </svg>
        </div>
    )
}

export default FretMarkers;