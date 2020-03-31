//TIM HORTONS ROLL THE RIM

//EVENT LISTENERS
document.getElementById('mainimg').addEventListener('click', rollRim);
docuumnet.getElementById('plus5').addEventListener('click', plus5);
document.getElementById('untilGrandPrize').addEventListener('click', untilGrandPrize);
document.getElementById('until500Donuts').addEventListener('click', until500Donuts);

//GLOBAL VARIABLES
let pleaseTryAgain = 0; 
let freeCoffee = 0;
let freeDonut = 0;
let grandPrize = 0;

function rollRim (){
    //ASSIGN VARIABLES
    let province = document.getElementById('province').value;
    //GENERATE RANDOM NUMBER
    let randNum = Math.random();

    //SIMULATE RESULTS
    if (province == 'Alberta') {
        if (randNum<=0.15) {
            pleaseTryAgain ++;
            document.getElementById('tryAgain'). innerHTML = pleaseTryAgain;
        } else if (randNum < 0.55){
            freeCoffee ++;
            document.getElementById('coffee').innerHTML = freeCoffee;
        } else if (randNum < 0.95) {
            freeDonut++;
            document.getElementById('donut').innerHTML = freeDonut;
        } else {
            grandPrize ++;
            document.getElementById('prize').innerHTML = grandPrize;
        }
    } else if (province=='British Columbia') {
        if (randNum <=0.7) {
            pleaseTryAgain ++;
            document.getElementById('tryAgain').innerHTML = pleaseTryAgain;
        } else if (randNum < 0.8){
            freeCoffee ++;
            document.getElementById('coffee').innerHTML = freeCoffee;
        } else if (randNum < 0.9) {
            freeDonut++;
            document.getElementById('donut').innerHTML = freeDonut;
        } else {
            grandPrize ++;
            document.getElementById('prize').innerHTML = grandPrize;
        }
    } else {
        if (randNum <=0.7) {
            pleaseTryAgain ++;
            document.getElementById('tryAgain').innerHTML = pleaseTryAgain;
        } else if (randNum < 0.71){
            freeCoffee ++;
            document.getElementById('coffee').innerHTML = freeCoffee;
        } else if (randNum < 0.72) {
            freeDonut++;
            document.getElementById('donut').innerHTML = freeDonut;
        } else {
            grandPrize ++;
            document.getElementById('prize').innerHTML = grandPrize;
        }
    }
}

function plus5() {
    for(let n=0; n<5; n++){
        rollRim();
    }
} 

function untilGrandPrize() {
    let count = 0;
    while (grandPrize < 1) {
        rollRim();
        count ++;
    }
}
function until500Donuts() {
    let count = 0;
    while (freeDonut <500) {
        rollRim();
        count ++;
    }
}