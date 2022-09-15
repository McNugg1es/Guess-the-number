var ps = require("prompt-sync")
var prompt = ps()
var lives = 3;


function guessNumber() {
    console.log("Try to guess the correct number. You have 3 attempts")
    const random = Math.floor(Math.random() * 10) + 0;
    var number = parseInt(prompt('Guess a number from 0 to 10: '));

    if(number == random) {
        console.log('You guessed the correct number.');
    }
    else
    {
        while(number !== random) {
        lives--
        console.log("You have "+lives+" attempts left. Try again")
        var number = parseInt(prompt('Guess a number from 0 to 10: '));
        if(lives == 1) {
        console.log("You lost. Better luck next time!")
        break;
        }



        }

    }



  }
guessNumber();