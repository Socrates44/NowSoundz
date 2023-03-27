function FingerPositionFinder(){
    let fing = [0,0,0,0,0,0];

    if(document.getElementById('C').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [-0,3,2,0,1,0];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [-0,3,1,0,2,4];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [-0,3,2,4,1,0];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,-0,-0,0,1,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [-0,1,2,4,3,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [2,-0,1,3,1,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,4,3,1,2,0];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,1,3,4,-2,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [-0,3,4,0,1,-0];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,-0,2,4,1,3];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [-0,3,1,4,1,-0];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [-0,1,3,-2,4,1];
        }
    }
    else if(document.getElementById('C#').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [-0,4,3,1,2,1];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [-0,1,3,4,2,1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [-0,3,2,4,1,-0];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,-0,-0,1,2,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [-0,1,2,4,3,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [-0,1,2,0,3,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,-0,4,2,3,1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,1,3,4,-2,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [-0,3,4,1,2,-0];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [1,4,3,-2,-3,1];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [-0,3,1,4,1,-0];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [-0,1,3,-2,4,1];
        }
    }
    else if(document.getElementById('D').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [-0,-0,0,1,3,2];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [-0,-0,0,2,3,1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [-0,-0,0,2,1,3];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,-0,0,1,2,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [-0,1,2,4,3,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [-0,-0,0,1,0,2];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,-0,0,2,3,1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,-0,0,1,2,0];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [-0,-0,0,1,2,3];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,-0,0,1,-2,1];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [-0,-0,0,3,1,2];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [-0,-0,0,2,1,4];
        }
    }
    else if(document.getElementById('D#').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [-0,-0,1,2,4,3];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [-0,-0,1,3,4,2];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [-0,-0,1,3,2,4];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,-0,1,3,4,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [-0,1,2,4,3,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [-0,-0,1,3,2,4];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,-0,4,2,3,1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,-0,1,3,4,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [-0,-0,1,3,4,4];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,-0,1,3,-2,3];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [-0,-0,1,4,2,3];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [-0,-0,1,3,2,4];
        }
    }
    else if(document.getElementById('E').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [0,2,3,1,0,0];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [0,1,1,0,0,0];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [0,2,0,1,0,0];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [0,1,-0,-0,-0,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [0,1,2,0,-0,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [-0,1,2,0,3,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [0,4,3,1,2,0];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,-0,1,3,4,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [0,1,-2,1,0,0];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [0,-0,1,1,0,-0];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [0,1,0,0,0,0];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [0,1,0,2,0,0];
        }
    }
    else if(document.getElementById('F').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [1,3,4,2,-2,1];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [1,3,4,-3,-2,1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [1,3,-2,2,-3,1];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [1,3,-0,-0,-0,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [1,2,3,1,-0,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [-0,2,3,1,4,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,-0,4,2,3,1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,-0,1,3,4,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [1,2,3,4,-2,1];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,-0,3,2,1,0];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [1,3,-2,-3,-4,1];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [1,3,-2,4,-3,1];
        }
    }
    else if(document.getElementById('F#').classList.contains('selected')){
       
        if(document.getElementById('Major').classList.contains('selected')){
            fing = [1,3,4,2,-2,1];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [1,3,4,-3,-2,1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [1,3,-3,2,-2,1];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [1,3,-0,-0,-0,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [1,2,3,1,-0,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [2,-0,1,3,1,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,-0,4,2,3,1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,-0,1,3,4,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [1,2,3,4,-2,1];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,-0,4,3,2,1];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [1,3,-3,-4,-2,1];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [1,3,-3,4,-2,1];
        }
    }
    else if(document.getElementById('G').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [2,1,0,0,0,3];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [1,3,4,-2,-3,1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [3,2,0,0,0,1];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,-0,0,0,-0,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [1,2,3,1,-0,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [-0,1,2,0,3,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [3,2,1,0,0,4];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,-0,1,3,4,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [1,2,3,4,-2,1];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,2,0,0,0,3];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [1,3,-2,-3,-4,1];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [1,3,-2,4,-4,1];
        }
    }
    else if(document.getElementById('G#').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [-0,-0,1,-3,1,4];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [1,3,4,-3,-4,1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [-0,-0,1,-3,1,2];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,-0,1,1,-0,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [1,2,3,1,-0,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [-0,2,3,1,4,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,-0,3,1,2,0];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,-0,1,3,4,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [-0,-0,1,1,2,4];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,3,1,-3,1,4];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [-0,-0,1,2,0,4];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [1,3,-2,4,-3,1];
        }
    }
    else if(document.getElementById('A').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [-0,0,1,2,3,0];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [-0,0,2,3,1,0];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [-0,0,1,0,2,0];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,0,1,1,-0,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [-0,0,1,3,2,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [2,-0,1,3,1,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,0,4,2,3,1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,0,1,1,0,0];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [-0,0,1,2,4,0];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,0,2,1,3,0];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [-0,0,2,0,1,0];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [-0,0,2,0,4,0];
        }
    }
    else if(document.getElementById('A#').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [-0,1,2,3,4,1];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [-0,1,3,4,2,1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [-0,1,3,-2,4,1];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,1,3,3,-0,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [-0,1,2,4,3,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [-0,1,2,0,3,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [-0,-0,4,2,3,1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,1,3,4,-2,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [-0,1,2,3,4,1];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,1,3,2,4,1];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [-0,1,3,-2,2,1];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [-0,1,3,-2,4,1];
        }
    }
    else if(document.getElementById('B').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            fing = [-0,1,2,3,4,1];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            fing = [-0,1,3,4,2,1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            fing = [-0,2,1,3,0,4];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            fing = [-0,1,3,3,-0,-0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            fing = [-0,1,2,4,3,-0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            fing = [1,-0,0,2,0,-0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            fing = [3,2,1,0,0,-0];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            fing = [-0,1,3,4,-2,1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            fing = [-0,1,2,3,4,1];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            fing = [-0,-0,1,4,0,3];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            fing = [-0,0,0,1,0,2];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            fing = [-0,1,3,-2,4,1];
        }
    }

    return([...fing]);
}

export default FingerPositionFinder;