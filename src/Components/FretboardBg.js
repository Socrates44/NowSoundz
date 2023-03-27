import React from 'react';
import { fbSize, stringPositions, fretPositions } from '../Utils/fretboardValues.js';
import Barre from './Barre.js';
import IsBarre from '../Utils/isBarre.js';

function Gradient() {
    return(
        <defs>
            
                <linearGradient id="e" x1="0" y1="0" x2="0" y2={fbSize.height} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#b5b4b0" offset="0" />
                    <stop stopColor="#757472" offset="1" />
                </linearGradient>
               
        </defs>
    )
}

const nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const fretNums = nums.map((n,i) => {
    return(
        <text
            key={`fret-num-${i}`}
            x={`${fretPositions[n] - (fbSize.width / 32)}`}
            y="10" 
            stroke="white"
        >
            {i}
        </text>
    )
})

const strings = stringPositions.map((pos, i) => {
    return (
        <line
            key={`string-${i}`}
            id={`string-${i}`}
            x1="0"
            y1={pos}
            x2={fbSize.width}
            y2={pos}
            stroke="url(#e)"
            strokeWidth={7 - i}
        />
    )
})

const frets = fretPositions.map((pos, i) => {
    return (
        <line
            key={`fret-${i}`}
            x1={pos}
            y1="0"
            x2={pos}
            y2={fbSize.height}
            stroke="#b93"
            strokeWidth="3"
        />
    )
})

const nut = <rect
        x="0"
        y="0"
        width={fretPositions[0]}
        height={fbSize.height}
        fill="rgba(0,0,0,0.8)"
    />

const dotFrets = [3, 5, 7, 9, 12,15];

const dots = dotFrets.map((fret,i) => {
    if (fret === 12){
        return (
            <g key={`dot-${fret}`} id={`dots-${fret}`}>
                <circle
                    cx={(fretPositions[fret]+fretPositions[fret-1]) / 2}
                    cy={2 * fbSize.height/6}
                    r="7"
                    fill="#a98"
                />
                <circle
                    cx={(fretPositions[fret]+fretPositions[fret-1]) / 2}
                    cy={4 * fbSize.height/6}
                    r="7"
                    fill="#a98"
                />
            </g>
        )
    }
    return (
        <circle
            key={`dot-${fret}`}
             id={`dot-${fret}`}
             cx={(fretPositions[fret]+fretPositions[fret-1]) / 2}
             cy={fbSize.height/2}
             r="7"
             fill="#a98"
         />
    )
})


function FretboardBg({currFrets, currFingers}){
    return (
        <div className="fretboard-bg">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${fbSize.width} ${fbSize.height}`}
                width={`${fbSize.width}`}
                height={`${fbSize.height} `}
                >
                <Gradient />
                {nut}
                {frets}
                {fretNums}
                {strings}
                {dots}
                {IsBarre && <Barre currFrets={currFrets} currFingers={currFingers}/>}
            </svg>
        </div>
    )
}

export default FretboardBg;