var ps = require("prompt-sync")
var prompt = ps()
var lives = 3;


function guessNumber() {
    console.log("Try to guess the correct number. You have"+lives+"attempts")
    const random = Math.floor(Math.random() * 10) + 1;
    console.log(random)
    var number = parseInt(prompt('Guess a number from 1 to 10: '));

    while(true){
    if(random == number) {
        console.log('You guessed the correct number.');
        break;
    }
    else if (random != number) {
        lives--
        console.log("You have "+lives+" attempts left. Try again")
        var number = parseInt(prompt('Guess a number from 1 to 10: '));
        }

    if((lives == 1) && (random != number)) {
        console.log("You lost. Better luck next time!")
        break;
        }

    }
    }




guessNumber();