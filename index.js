// Code your solution in this file!
let hq = 42;

function distanceFromHqInBlocks(pickupLoc){
    return Math.max(hq, pickupLoc) - Math.min(hq, pickupLoc);
}

function distanceFromHqInFeet(pickupLoc){
    return distanceFromHqInBlocks(pickupLoc) * 264;
}

function distanceTravelledInFeet(start, destination){
    return (Math.max(start, destination) - Math.min(start, destination)) * 264;
}

function calculatesFarePrice(start, destination){
    let fee;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        distance -= 400;
        fee = 0;
        return fee;
    }
    else if (distance > 400 && distance < 2000){
        distance -= 400;
        fee = distance * 0.02;
        return fee;
    }
    else if (distance >= 2000 && distance <= 2500){
        fee = 25;
        return fee;
    }
    else if (distance > 2500){
        return `cannot travel that far`;
    }
}