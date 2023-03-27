import React from 'react';

const selected = (e) => {

    if(e.currentTarget.classList.contains('selected')){
        e.currentTarget.classList.toggle('selected');
    }
    else{
        document.querySelectorAll('.rootBtn').forEach((el) => el.classList.remove('selected'));
        e.currentTarget.classList.toggle('selected');
    }

    if(document.querySelectorAll('.selected').length === 2){

        document.getElementById('guitar').scrollIntoView({ behavior: 'smooth' });
    }
}

function RootNote ({updateCurrFrets, updateCurrFingers}){

    const rootNoteArr = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    const renderBtn = () => {
        // works fine
        return rootNoteArr.map((val) => { // here you return the new array created by map
            return <button 
                    onClick={(e)=>{
                        selected(e);
                        updateCurrFrets();
                        updateCurrFingers();
                    }}
                    className='rootBtn' 
                    id={val} 
                    key={val}
                    >
                        {val}
                    </button>
        });
    };

    return(
        <div className='rootNoteContainer'>
            <h2>Root Note</h2>
            {renderBtn()}
        </div>
    )
}

export default RootNote;