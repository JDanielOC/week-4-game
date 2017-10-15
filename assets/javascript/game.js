// variables

var vaiJem = 0;
var fenderEsquire = 0;
var lesPaul = 0;
var rickGlo = 0;

var yourScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

//functions

// get a random number for target score
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// startGame function
var startGame = function() {

    //reset score
    yourScore = 0;

    //set random target score
    targetScore = getRandom(19, 120);

    //values for guitars
    vaiJem = getRandom(1, 12);
    fenderEsquire = getRandom(1, 12);
    lesPaul = getRandom(1, 12);
    rickGlo = getRandom(1, 12);

    // use jQuery to insert .html items for target, score, wins and losses
    $("#playerScore").html(yourScore);
    $("#cpuScore").html(targetScore);
    $("#wins").html(winCount);
    $("#losses").html(lossCount);

}

//game logic



startGame(); {

    //add calculated yourScore + guitar value and update on html 

    $("#jem").click(function() {
        yourScore += vaiJem;
        $("#playerScore").html(yourScore);

    });

    $("#esquire").click(function() {
        yourScore += fenderEsquire;
        $("#playerScore").html(yourScore);
    });

    $("#les").click(function() {
        yourScore += lesPaul;
        $("#playerScore").html(yourScore);
    });

    $("#rick").click(function() {
        yourScore += rickGlo;
        $("#playerScore").html(yourScore);
    });

    //functions for winning or losing.


    if (yourScore == targetScore) {
        winCount++;
    } else if (yourScore > targetScore) {
        lossCount++;
        alert("I'm sorry, but you're just too darn loud.");
    } else {


    }


    console.log("Target Score: " + targetScore);
    console.log("Your Score: " + yourScore);
    console.log("JEM: " + vaiJem + " | Esquire: " + fenderEsquire + " | Les Paul: " + lesPaul + " | Rickenbacker: " + rickGlo);
    console.log("Your Wins: " + winCount);
    console.log("Your Losses: " + lossCount);
};