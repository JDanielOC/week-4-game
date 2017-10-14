// variables
// -------------------------------------

var blueCrystal = 0;
var redCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;



//functions
// -------------------------------------

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

    //reset score
    currentScore = 0;

    //set random target score
    targetScore = getRandom(19, 120);

    //values for crystals
    blueCrystal = getRandom(1, 12);
    redCrystal = getRandom(1, 12);
    greenCrystal = getRandom(1, 12);
    yellowCrystal = getRandom(1, 12);

// use jQuery to insert html items
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

    console.log("--------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + blueCrystal + " | Red: " + redCrystal + " | Green: " + greenCrystal + " | Yellow: " + yellowCrystal);
    console.log("---------------------");
}

var addValues = function(crystal) {





}


//game logic
// -------------------------------------

startGame();

$("#blue").click(function() {
    alert("blue");
});

$("#red").click(function() {
    alert("red");
});

$("#green").click(function() {
    alert("green");
});

$("#yellow").click(function() {
    alert("yellow");
});