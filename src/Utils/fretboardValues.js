const fbSize = {
    width:1200,
    height:240

}

function createStringPositions(){
    return Array(6).fill(0).map((s,i) => (5.5-i) * fbSize.height/6);
}

function createFretPositions(){
    const frets = 15;

    const perc = Array(frets + 1).fill(0)
    .map((d, n) => 1);

    return perc.map((f,i) =>  ((fbSize.width / (frets + 1)) * (i + 1)));
}

const stringPositions = createStringPositions();
const fretPositions = createFretPositions();

export { fbSize, stringPositions, fretPositions }