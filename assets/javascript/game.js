// variables

// var vaiJem = 0;
// var fenderEsquire = 0;
// var lesPaul = 0;
// var rickGlo = 0;

// var yourScore = 0;
// var targetScore = 0;

var winCount = 0;
var lossCount = 0;



// get a random number for target score
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// startGame function to set up the game for play
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
        console.log("Your Score: " + yourScore);
    });

    $("#esquire").click(function() {
        yourScore += fenderEsquire;
        $("#playerScore").html(yourScore);
        console.log("Your Score: " + yourScore);
    });

    $("#les").click(function() {
        yourScore += lesPaul;
        $("#playerScore").html(yourScore);
        console.log("Your Score: " + yourScore);
    });

    $("#rick").click(function() {
        yourScore += rickGlo;
        $("#playerScore").html(yourScore);
        console.log("Your Score: " + yourScore);
    });

    //functions for winning or losing.
    
    /*This is not working. I can see that targetNumber and yourScore both display
    and yourScore calculates. When it equals targetNumber...nothing. When it exceeds
    targetNumber...nothing. No increase in winCount or lossCount.*/

    if (yourScore === targetScore) {
        winCount++;
        alert("you win");
        startGame();
    }

    if (yourScore > targetScore) {
        lossCount++;
        alert("I'm sorry, but you're just too darn loud.");
        startGame();
    }


    console.log("Target Score: " + targetScore);
    console.log("JEM: " + vaiJem + " | Esquire: " + fenderEsquire + " | Les Paul: " + lesPaul + " | Rickenbacker: " + rickGlo);
    console.log("Your Wins: " + winCount);
    console.log("Your Losses: " + lossCount);


};