// The keyboard has been rendered for you
import { renderKeyboard } from '/keyboard'
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

// Some useful elements
const guessContainer = document.getElementById('guess-container')
const snowmanParts = document.getElementsByClassName('snowman-part')



// Set the word to guess
const word = "gift"
// 6 guesses for the 6 parts of the snowman
let guesses = 6


function checkGuess() {
    
}

renderKeyboard()
