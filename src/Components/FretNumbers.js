import React from 'react';
import { fretPositions } from '../Utils/fretboardValues.js';



function FretNumbers (){

    const fretNums = fretPositions.map((f,i) => {
        return(
            <p key={i}>
                {i}
            </p>
        )
    })

    return(
        <div className='fret-num-container'>

                {fretNums}
        </div>
    )


}

export default FretNumbers;