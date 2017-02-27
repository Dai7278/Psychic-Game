 var appchoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 var letters = null;
 var wins = 0;
 var losses = 0;
 var guesses = 12;
 var guessesLeft = 12;
 var guessedLetters = [];

var appchoices = appchoices[Math.floor(Math.random() * appchoices.length)];

window.onload = function() {
 
 	// body...
 
document.getElementById("Guesses").innerHTML = "Guesses Left : " + guessesLeft;
document.getElementById("Losses").innerHTML = "Losses : " + losses;
document.getElementById("Wins").innerHTML = "Wins : " + wins;
document.getElementById("SoFar").innerHTML = "Your Guesses So Far : " + guessedLetters;

}

