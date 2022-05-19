const returnFirstTwoDrivers = function(parameter1){
    return parameter1.slice(0,2);
}

const returnLastTwoDrivers = function(parameter2){
    return parameter2.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){
    return function fareMultiplier(fare){
        return fare * fare;
    }
}

const fareDoubler = function fareMultiplier(fare){
    return fare * 2;
}

const fareTripler = function fareMultiplier(fare){
    return fare * 3;
}

function selectDifferentDrivers(parameterOne, cb){
    return cb(parameterOne);
}

// const array = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// console.log(returnLastTwoDrivers(array));