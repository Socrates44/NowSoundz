function ChordFinder(){
    let chord = [0,0,0,0,0,0];

    if(document.getElementById('C').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [-0, 3, 2, 0, 1, 0];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [-0, 3, 1, 0, 1, 3];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [-0, 3, 2, 3, 1, 0]
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, -0, -0, 0, 1, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [-0, 3, 4, 5, 4, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [2, -0, 1, 2, 1, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, 3, 2, 1, 1, 0];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, 3, 5, 5, 3, 3];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [-0, 3, 3, 0, 1, -0];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, -0, 2, 4, 1, 3];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [-0, 3, 1, 3, 1, -0];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [-0, 3, 5, 3, 6, 3];
        }
    }
    else if(document.getElementById('C#').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [-0, 4, 3, 1, 2, 1];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [-0, 4, 6, 6, 5, 4];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [-0, 4, 3, 4, 2, -0];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, -0, -0, 1, 2, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [-0, 4, 5, 6, 5, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [-0, 1, 2, 0, 2, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, -0, 3, 2, 2, 1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, 4, 6, 6, 4, 4];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [-0, 4, 4, 1, 2, -0];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [1, 4, 3, 1, 1, 1];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [-0, 4, 2, 4, 2, -0];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [-0, 4, 6, 4, 7, 4];
        }
    }
    else if(document.getElementById('D').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 3, 2];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 3, 1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 1, 2];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 3, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [-0, 5, 6, 7, 6, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [-0, -0, 0, 1, 0, 1];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, -0, 0, 3, 3, 2];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 3, 0];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 3, 3];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 2, 2];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 1, 1];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [-0, -0, 0, 2, 1, 3];
        }
    }
    else if(document.getElementById('D#').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 4, 3];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 4, 2];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 2, 3];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 4, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [-0, 6, 7, 8, 7, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [-0, -0, 1, 2, 1, 2];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, -0, 5, 4, 4, 3];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 4, 1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 4, 4];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 3, 3];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 2, 2];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 2, 4];
        }
    }
    else if(document.getElementById('E').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [0, 2, 2, 1, 0, 0];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [0, 2, 2, 0, 0, 0];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [0, 2, 0, 1, 0, 0];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [0, 2, -0, -0, -0, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [0, 1, 2, 0, -0, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [-0, 1, 2, 0, 2, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [0, 3, 2, 1, 1, 0];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, -0, 2, 4, 5, 2];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [0, 2, 2, 2, 0, 0];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [0, -0, 1, 1, 0, -0];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [0, 2, 0, 0, 0, 0];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [0, 2, 0, 2, 0, 0];
        }
    }
    else if(document.getElementById('F').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [1, 3, 3, 2, 1, 1];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [1, 3, 3, 1, 1, 1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [1, 3, 1, 2, 1, 1];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [1, 3, -0, -0, -0, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [1, 2, 3, 1, -0, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [-0, 2, 3, 1, 3, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, -0, 3, 2, 2, 1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, -0, 3, 5, 6, 3];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [1, 3, 3, 3, 1, 1];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, -0, 3, 2, 1, 0];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [1, 3, 1, 1, 1, 1];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [1, 3, 1, 3, 1, 1];
        }
    }
    else if(document.getElementById('F#').classList.contains('selected')){
       
        if(document.getElementById('Major').classList.contains('selected')){
            chord = [2, 4, 4, 3, 2, 2];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [2, 4, 4, 2, 2, 2];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [2, 4, 2, 3, 2, 2];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [2, 4, -0, -0, -0, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [2, 3, 4, 2, -0, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [2, -0, 1, 2, 1, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, -0, 4, 3, 3, 2];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, -0, 4, 6, 7, 4];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [2, 4, 4, 4, 2, 2];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, -0, 4, 3, 2, 1];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [2, 4, 2, 2, 2, 2];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [2, 4, 2, 4, 2, 2];
        }
    }
    else if(document.getElementById('G').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [3, 2, 0, 0, 0, 3];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [3, 5, 5, 3, 3, 3];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [3, 2, 0, 0, 0, 1];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, -0, 0, 0, -0, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [3, 4, 5, 3, -0, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [-0, 1, 2, 0, 2, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [3, 2, 1, 0, 0, 3];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, -0, 5, 7, 8, 5];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [3, 5, 5, 5, 3, 3];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, 2, 0, 0, 0, 2];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [3, 5, 3, 3, 3, 3];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [3, 5, 3, 5, 3, 3];
        }
    }
    else if(document.getElementById('G#').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [-0, -0, 1, 1, 1, 4];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [4, 6, 6, 4, 4, 4];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [-0, -0, 1, 1, 1, 2];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, -0, 1, 1, -0, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [4, 5, 6, 4, -0, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [-0, 2, 3, 1, 3, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, -0, 2, 1, 1, 0];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, -0, 6, 8, 9, 6];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [-0, -0, 1, 1, 2, 4];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, 3, 1, 1, 1, 3];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [-0, -0, 1, 1, 0, 2];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [4, 6, 4, 6, 4, 4];
        }
    }
    else if(document.getElementById('A').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [-0, 0, 2, 2, 2, 0];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [-0, 0, 2, 2, 1, 0];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [-0, 0, 2, 0, 2, 0];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, 0, 2, 2, -0, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [-0, 0, 1, 2, 1, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [2, -0, 1, 2, 1, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, 0, 3, 2, 2, 1];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, 0, 2, 2, 0, 0];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [-0, 0, 2, 2, 3, 0];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, 0, 2, 1, 2, 0];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [-0, 0, 2, 0, 1, 0];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [-0, 0, 2, 0, 3, 0];
        }
    }
    else if(document.getElementById('A#').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [-0, 1, 3, 3, 3, 1];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [-0, 1, 3, 3, 2, 1];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [-0, 1, 3, 1, 3, 1];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, 1, 3, 3, -0, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [-0, 1, 2, 3, 2, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [-0, 1, 2, 0, 2, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [-0, -0, 4, 3, 3, 2];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, 1, 3, 3, 1, 1];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [-0, 1, 3, 3, 4, 1];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, 1, 3, 2, 3, 1];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [-0, 1, 3, 1, 2, 1];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [-0, 1, 3, 1, 4, 1];
        }
    }
    else if(document.getElementById('B').classList.contains('selected')){

        if(document.getElementById('Major').classList.contains('selected')){
            chord = [-0, 2, 4, 4, 4, 2];
        }
        else if(document.getElementById('Minor').classList.contains('selected')){
            chord = [-0, 2, 4, 4, 3, 2];
        }
        else if(document.getElementById('7').classList.contains('selected')){
            chord = [-0, 2, 1, 2, 0, 2];
        }
        else if(document.getElementById('5').classList.contains('selected')){
            chord = [-0, 2, 4, 4, -0, -0];
        }
        else if(document.getElementById('dim').classList.contains('selected')){
            chord = [-0, 2, 3, 4, 3, -0];
        }
        else if(document.getElementById('dim7').classList.contains('selected')){
            chord = [1, -0, 0, 1, 0, -0];
        }
        else if(document.getElementById('aug').classList.contains('selected')){
            chord = [7, 6, 5, 0, 0, -0];
        }
        else if(document.getElementById('sus2').classList.contains('selected')){
            chord = [-0, 2, 4, 4, 2, 2];
        }
        else if(document.getElementById('sus4').classList.contains('selected')){
            chord = [-0, 2, 4, 4, 5, 2];
        }
        else if(document.getElementById('maj7').classList.contains('selected')){
            chord = [-0, -0, 1, 3, 0, 2];
        }
        else if(document.getElementById('m7').classList.contains('selected')){
            chord = [-0, 0, 0, 2, 0, 2];
        }
        else if(document.getElementById('7sus4').classList.contains('selected')){
            chord = [-0, 2, 4, 2, 5, 2];
        }
    }

    return([...chord]);
}

export default ChordFinder;