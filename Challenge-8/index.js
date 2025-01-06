import { renderKeyboard,keyboardContainer } from './keyboard.js'
renderKeyboard();

const guessContainer = document.getElementById('guess-container');
const snowmanParts = document.getElementsByClassName('snowman-part');

snowmanParts[0].style.visibility = 'hidden';

// Set the word to guess
const word = "gift";

// 6 guesses for the 6 parts of the snowman
let guesses = 6
let corectGuesses = 0;

function invisibleSnowmanPart() {

  
    snowmanParts[guesses].style.visibility = 'hidden';

    
}

function disableButton(lettersToDisable) {

        const button = document.getElementById(lettersToDisable);

        if (button) {
            button.disabled = true; // Disable the button
           
        }
  
}


function checkGuess(e) {

    let letter = e.target.innerText;

    disableButton(letter);

    if (word.includes(letter)) {
        const letterIndex = word.indexOf(letter);
        guessContainer.children[letterIndex].innerText = letter;
        corectGuesses++;
    } else {
       
        invisibleSnowmanPart();
    }

    guesses--;
    console.log(corectGuesses);
    console.log(guesses);

    if (corectGuesses === 4) {
        guessContainer.innerHTML = ' ';
        guessContainer.innerHTML = "You Won!";
        document.getElementById('keyboard-container').style.display = 'none';

        for(let i = 0; i < snowmanParts.length; i++) {
            snowmanParts[i].style.visibility = 'visible';
    }
}

    else if (guesses === 0) {
       
        guessContainer.innerHTML = ' ';
        for(let i = 0; i < snowmanParts.length; i++) {
            snowmanParts[i].style.visibility = 'hidden';
    }
        guessContainer.innerHTML = "You lose!";
        document.getElementById('keyboard-container').style.display = 'none';
    }


}

document.getElementById('keyboard-container').addEventListener('click', checkGuess);

