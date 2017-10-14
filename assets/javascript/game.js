// variables


var vaiJem = 0;
var fenderEsquire = 0;
var lesPaul = 0;
var rickGlo = 0;

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;



//functions


var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

    //reset score
    currentScore = 0;

    //set random target score
    targetScore = getRandom(19, 120);

    //values for guitars
    vaiJem = getRandom(1, 12);
    fenderEsquire = getRandom(1, 12);
    lesPaul = getRandom(1, 12);
    rickGlo = getRandom(1, 12);

// use jQuery to insert html items
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);


    console.log("Target Score: " + targetScore);
    console.log("JEM: " + vaiJem + " | Esquire: " + fenderEsquire + " | Les Paul: " + lesPaul + " | Rickenbacker: " + rickGlo);

}




//game logic


startGame();

$("#jem").click(function() {
    alert("jem");
});

$("#esquire").click(function() {
    alert("esquire");
});

$("#les").click(function() {
    alert("les");
});

$("#rick").click(function() {
    alert("rick");
});