/*
-create variables for scores and counts that will be altered as game is played.
-create a random number generator function to be used by guitars and cpu target score.
-print to html file using jQuery .html yourScore/targetScore/wins/losses
-add if statements to increase points for wins and losses
-add if statements to determine if 5 games have been won or lost
-reset game function
*/

//variables
var yourScore;
var winCount;
var lossCount;
var targetScore;

// get a random number for target score
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var resetCounters = function() {
    winCount = 0;
    lossCount = 0;
}
// startGame function to pull random numbers from the getRandom number generator

var startGame = function() {

    //reset yourScore
    yourScore = 0;

    //set random target score
    targetScore = getRandom(19, 120);

    console.log("random target score: " + targetScore);

    //set random values for guitars
    vaiJem = getRandom(1, 12);
    fenderEsquire = getRandom(1, 12);
    lesPaul = getRandom(1, 12);
    rickGlo = getRandom(1, 12);

    console.log("random guitar values: " + "Vai " + vaiJem + " | Esquire " + fenderEsquire + " | Les Paul " + lesPaul + " | Rickenbacker " + rickGlo);

    $("#playerScore").html(yourScore);
    $("#cpuScore").html(targetScore);
}

//start the game

startGame();
resetCounters();
//write .click to print to html for each guitar

$("#jem").click(function() {
    yourScore += vaiJem;
    $("#playerScore").html(yourScore);
    evaluateGame();
});

$("#esquire").click(function() {
    yourScore += fenderEsquire;
    $("#playerScore").html(yourScore);
    evaluateGame();
});

$("#les").click(function() {
    yourScore += lesPaul;
    $("#playerScore").html(yourScore);
    evaluateGame();
});

$("#rick").click(function() {
    yourScore += rickGlo;
    $("#playerScore").html(yourScore);
    evaluateGame();
});


//print yourScore / targetScore / winCount / lossCount to html file $(id).html(var);
$("#wins").html(winCount);
$("#losses").html(lossCount);

/*if statements for scoring and game win/losses wrapping them in a function 
 and calling that function above made winning/losing possible.*/

/*This is not working. Game runs fine and game resets when won or lost. 
However, no increase in winCount or lossCount. FIXED - turns out I was setting wins
and losses to zero in the startGame function. Maniacal, I tell you. */

var evaluateGame = function() {

    if (yourScore === targetScore) {
        winCount++;
        alert("Rock on! Keep playing!");
        startGame();
    };

    if (yourScore > targetScore) {
        lossCount++;
        alert("Maybe you should tune that thing before you play some more.");
        startGame();
    };
    if (winCount === 3) {
        alert("You're ready to rock! Hit the stage!");
        resetCounters();
    };

    if (lossCount === 3) {
        alert("I'm sorry, but... you're just too darn loud.");
        resetCounters();
    };

    $("#wins").html(winCount);
    $("#losses").html(lossCount);
    console.log("wincount: " + winCount);
    console.log("losscount: " + lossCount);
    console.log("Your Score: " + yourScore);

};