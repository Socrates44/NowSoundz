import React from 'react';

const chordTypeArr = ['Major', 'Minor', '7', '5', 'dim', 'dim7', 'aug', 'sus2', 'sus4', 'maj7', 'm7', '7sus4'];

const selected = (e) => {

    if(e.currentTarget.classList.contains('selected')){
        e.currentTarget.classList.toggle('selected');
    }
    else{
        document.querySelectorAll('.typeBtn').forEach((el) => el.classList.remove('selected'));
        e.currentTarget.classList.toggle('selected');
    }

    if(document.querySelectorAll('.selected').length === 2){

        document.getElementById('guitar').scrollIntoView({ behavior: 'smooth' });
    }
}

function ChordType ({updateCurrFrets,updateCurrFingers}){

    const renderBtn = () => {
        // works fine
        return chordTypeArr.map((val) => { // here you return the new array created by map
            return <button 
                    onClick={(e)=>{
                        selected(e);
                        updateCurrFrets();
                        updateCurrFingers();
                    }}
                    className='typeBtn' 
                    id={val} 
                    key={val}
                    >
                        {val}
                    </button>
        });
    };

    return(
        <div className='chordTypeContainer'>
            <h2>Chord Type</h2>
            {renderBtn()}
        </div>
    )
}

export default ChordType;