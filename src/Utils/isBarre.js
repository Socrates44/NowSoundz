import FingerPositionFinder from "./fingerPositionFinder";

function IsBarre(){
    
    let fings = FingerPositionFinder;

    for (let i = 0; i < fings.length; i++) {
        
        for (let j = 0; j < fings.length; j++) {
            
            if(i !== j){
                
                if((fings[i] === fings[j]) && (fings[i] !== 0 && fings[i] !== -0)){
                    return true;
                }
                else{
                    return false;
                }
                
            }
        }
    }

}

export default IsBarre;