// 1.Problem -  feetToMile


function feetToMile(feet){
    if(feet<=0){// if value is 0 or negative.
        return "Please enter valid feet number."
    }else{
        let mile = feet/5280; // 5280 feet == 1 mile
        return mile.toFixed(7);
    }
}
const TotalMile = feetToMile(420);
console.log(TotalMile);


// 2.Problem -  woodCalculator


function woodCalculator(chair, table, bed){
    let woodNeedForChair = 1; //cubic feet
    let woodNeedForTable = 3; //cubic feet
    let woodNeedForBed = 5;   //cubic feet
    if(chair<0 || table<0 || bed<0){// if value is negative.
        return "Enter valid information Like chair, table, bed Number."
    }
    woodNeedForChair = woodNeedForChair * chair;
    woodNeedForTable = woodNeedForTable * table;
    woodNeedForBed = woodNeedForBed * bed;

    let Total = woodNeedForChair + woodNeedForTable + woodNeedForBed;
  
    return Total;
}
const woodNeeded = woodCalculator(6, 12, 18);
console.log(woodNeeded);


// 3.Problem -  brickCalculator


function brickCalculator(floor){
    if(floor<=0){//if input value is 0 or negative number.
        return "Please enter valid floor number.";
    }else if(floor<=10){
        let brickPerFeet = 1000;
        let brickfirstFloor = 15 * brickPerFeet;
        let brickFirstTenFloor = floor * brickfirstFloor
        return brickFirstTenFloor;
    }else if(floor>10 && floor<=20){
        let brickPerFeet = 1000;
        let brickFirstTenFloor = 15000*10;//first 10 floor bricks needed
        let brickElevenToTwentyPerFloor = 12 * brickPerFeet;
        let brickNeedElevenToTwentyFloor = (floor-10) * brickElevenToTwentyPerFloor;
        let totalBrickNeedElevenToTwentyFloor = brickFirstTenFloor + brickNeedElevenToTwentyFloor;
        return totalBrickNeedElevenToTwentyFloor;
    }else{
        let brickPerFeet = 1000;
        let brickFirstTwentyFloor = 15000*10 + 10*12000;//first 20 floor bricks needed
        let brickNeedAbovePerFloor = 10 * brickPerFeet;
        let brickNeedAboveFloor = (floor-20) * brickNeedAbovePerFloor;
        let totlaBrickNeedAboveFloor = brickFirstTwentyFloor + brickNeedAboveFloor;
        return totlaBrickNeedAboveFloor;
    }
}
const totalBrick = brickCalculator(27);
console.log(totalBrick);


// 4.Problem -  tinyFriend
function tinyFriend(friends){
    let minLengthName = friends[0];
    if(minLengthName.length ==  ""){ //if friends Array is empty [""]
        return "Enter your friend name."
    }
    for(i=0; i<friends.length; i++){
        let frindsName = friends[i];
        if(frindsName.length<minLengthName.length){
            minLengthName = frindsName;
        }
    }
    return minLengthName;
}
const friends = ["Rafid","Sakib", "Nishat", "Eshak"]; 
console.log(tinyFriend(friends))