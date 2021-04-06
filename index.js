// Code your solution in this file!
function distanceFromHqInBlocks(blockNum){
    if(blockNum > 42){
        return blockNum - 42;
    }
    if(blockNum < 42){
        return 42 - blockNum;
    }
    else{
        return 0;
    }
}
function distanceFromHqInFeet(blockNum){
    return distanceFromHqInBlocks(blockNum) * 264;
}
function distanceTravelledInFeet(block1, block2){
    if(block1 > block2){
        return (block1 - block2) * 264;
    }
    if(block1 < block2){
        return (block2 - block1) * 264;
    }
    else{
        return 0;
    }

}
function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    }
    if(distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <=2000){
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    }
    if(distanceTravelledInFeet(start, destination) > 2000){
        if(distanceTravelledInFeet(start, destination) > 2500){
            return 'cannot travel that far';
        }
        else{
            return 25;
        }
    }

}