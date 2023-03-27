import React from 'react';
import RootNote from './RootNote';
import ChordType from './ChordType';

function ChordMaker({updateCurrFrets, updateCurrFingers}){

    return (
        <div className='chordMaker'>
            <RootNote 
                updateCurrFrets={updateCurrFrets}
                updateCurrFingers={updateCurrFingers} 
            />

            <ChordType 
                updateCurrFrets={updateCurrFrets}
                updateCurrFingers={updateCurrFingers} 
            
            />
        </div>
    )
}

export default ChordMaker;